import { PureComponent } from 'react';
import Type from 'prop-types';
import cn from 'arui-feather/cn';
import { withFormik } from 'formik';

import * as yup from 'yup'; // for everything
import { connect } from 'react-redux';
import Heading from 'arui-feather/heading';
import Button from 'arui-feather/button';

import axios from '../../axios-instance-browser';
import Grid from '../../components/grid/grid';
import GridItem from '../../components/grid/grid-item';
import FormRadioGroup, { propsFormRadioGroup } from '../../components/form-radio-group/form-radio-group';
import FormInput, { propsFormInput } from '../../components/form-input/form-input';
import FormSelect, { propsFormSelect } from '../../components/form-select/form-select';

import './page-tac-main-info.css';

@cn('page-tac-main-info')
class PageTacMainInfo extends PureComponent {
    static propTypes = {
        error: Type.bool,
        authPage: Type.string,
        changeScreen: Type.func,
        children: Type.node,
        values: Type.shape({}),
        errors: Type.shape({}),
        touched: Type.shape({}),
        isSubmitting: Type.bool,
        isValid: Type.bool,
        setFieldValue: Type.func,
        setFieldTouched: Type.func,
        handleSubmit: Type.func
    };

    render(cn) {
        // console.log('this.props', this.props);
        // console.log('this.props.touched', this.props.touched);
        // console.log('this.props.errors', this.props.errors);
        const {
            isSubmitting
        } = this.props;
        return (
            <div className={ cn() }>
                <div style={ { background: 'yellow', marginTop: '12px' } }>TODO вставить нормальный alert.<br />
                    Ура, подключение началось! Сообщите нам основные данные по вашей компании,
                    и мы рассчитаем вам удобные условия обслуживания.
                </div>
                <Heading size='m'>
                    Информация для расчета тарифа
                </Heading>
                <Grid>
                    <GridItem
                        cols={ 8 }
                        colsSmall={ 12 }
                    >
                        <form onSubmit={ this.props.handleSubmit }>
                            <FormInput
                                label='ID типа продукта'
                                { ...propsFormInput(this.props, 'idProductType') }
                                disabled={ false }
                            />
                            <FormInput
                                label='Контактное лицо'
                                { ...propsFormInput(this.props, 'contact') }
                                disabled={ false }
                            />
                            <FormInput
                                label='Телефон'
                                { ...propsFormInput(this.props, 'phone') }
                                disabled={ false }
                            />
                            <FormSelect
                                { ...propsFormSelect(this.props, 'idMCC') }
                                label='Вид деятельности'
                                options={ [
                                    { value: '210051', text: 'Танцклубы, танцшколы и студии' },
                                    { value: '210054', text: 'Бильярд-клубы' },
                                    { value: '209918', text: 'Покрытия для пола' }
                                ] }
                            />
                            <FormInput
                                label='Среднемесячная торговая выручка'
                                { ...propsFormInput(this.props, 'summaryTurnover') }
                                disabled={ false }
                            />
                            <FormInput
                                label='Средний чек покупки'
                                { ...propsFormInput(this.props, 'averageCheckSum') }
                                disabled={ false }
                            />
                            <FormInput
                                label='Среднемесячный оборот по эквайрингу'
                                { ...propsFormInput(this.props, 'terminalTurnover') }
                                disabled={ false }
                            />
                            <FormRadioGroup
                                { ...propsFormRadioGroup(this.props, 'hasEcquiring') }
                                label='Подскажите, вы сейчас обслуживаетесь по услуге эквайринга?'
                                options={ [{ value: 'yes', text: 'Да' }, { value: 'no', text: 'Нет' }] }
                            />
                            <FormInput
                                { ...propsFormInput(this.props, 'tradeName') }
                                label='Фирменное наименование'
                                disabled={ false }
                            />
                            <Button
                                type='submit'
                                pseudo={ true }
                                disabled={ isSubmitting }
                            >
                                &larr; К предыдущему шагу
                            </Button>
                            <Button
                                type='submit'
                                view='extra'
                                disabled={ isSubmitting }
                            >
                                Расчитать тариф
                            </Button>
                        </form>
                    </GridItem>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    projectName: state.settings.client.projectName,
    endpointProductsCreate: state.settings.endpoints.products.create
});

const formikEnhancer = withFormik({
    validationSchema: yup.object().shape({
        tradeName: yup.string().required(),
        idMCC: yup.string().required()
    }),
    mapPropsToValues: props => ({
        idProductType: '216561',
        contact: 'Майкл',
        phone: '9165926645',
        idMCC: '',
        summaryTurnover: '5000000',
        averageCheckSum: '3000',
        terminalTurnover: '1000000',
        hasEcquiring: '',
        tradeName: 'Бизнес-Оптимизация',
        test: props.test
    }),
    handleSubmit: (values, { props, setSubmitting }) => {
        console.log(333, props);
        console.log('handleSubmit 1');
        const orderId = '5b2623b41890960001c80489';
        const data = values;
        const { method, path: url } = props.endpointProductsCreate;
        axios({
            method,
            url,
            data: {
                orderId,
                data
            }
        }).then((res) => {
            setSubmitting(false);
            console.log('res', res);
        });
    }
});

const EnhanceredForm = formikEnhancer(PageTacMainInfo);

const ConnectedForm = connect(mapStateToProps)(EnhanceredForm);

export default ConnectedForm;
