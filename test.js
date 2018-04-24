{
  "created": 1524220070044,
  "modified": 1524220070044,
  "id": "eyJvcmRlcklkIjoiNWFkOWMwYTY2ZjVlNWQwMDAxMTc5ODlmIiwic3lzdGVtQ29kZSI6IkFPIn0",
  "type": "ORDER_TYPE_NEW_CLIENT",
  "status": {
    "name": "Черновик",
    "code": "draft_new",
    "declined": false,
    "draft": true
  },
  "user": {
    "login": "79165926645",
    "type": "nc",
    "id": {
      "timestamp": 1516275234,
      "machineIdentifier": 2280686,
      "processIdentifier": 1,
      "counter": 9810323,
      "timeSecond": 1516275234,
      "time": 1516275234000,
      "date": 1516275234000
    },
    "name": "79165926645",
    "position": "Client",
    "branch": null,
    "createdAt": 1516275234661,
    "employeeId": null,
    "tmAppID": "HASDRAFT",
    "hasPRPCOrders": false,
    "employee": false
  },
  "properties": {
    "clientName": "ОАО \"АПРЕС\"",
    "useDadata": true,
    "legalType": "legal",
    "inn": "5505001615",
    "ogrn": "1025501167218",
    "fullName": "Задорожный Сергей Прокопьевич",
    "regDate": null,
    "address": "г Омск, ул Комсомольская 13-я, д 1",
    "cityId": 55,
    "city": "Омск",
    "region": 55,
    "branchMnemonic": "NVOM",
    "branch": "Операционный офис \"Омский\"  филиала \"Новосибирский\"",
    "branchAddress": "ул. Куйбышева, д. 79",
    "phone": "79165926645",
    "email": "1@rt.eu",
    "step": "companyInfo",
    "lastName": "Задорожный",
    "firstName": "Сергей",
    "middleName": "Прокопьевич"
  },
  "files": []
}


{
  "created": 1524212636543,
  "modified": 1524218311570,
  "id": "eyJvcmRlcklkIjoiNWFkOWEzOWM2ZjVlNWQwMDAxMTc5ODk5Iiwic3lzdGVtQ29kZSI6IkFPIn0",
  "type": "ORDER_TYPE_NEW_CLIENT",
  "status": {
    "name": "Отклонено",
    "code": "draft_declined",
    "declined": true,
    "draft": true
  },
  "user": {
    "login": "OPENACCOUNT_ONA",
    "type": "employee",
    "id": {
      "timestamp": 1507893533,
      "machineIdentifier": 6627845,
      "processIdentifier": 1,
      "counter": 7958119,
      "timeSecond": 1507893533,
      "time": 1507893533000,
      "date": 1507893533000
    },
    "name": "Фронтовик Фронт Фронтович",
    "position": "разработчик",
    "branch": "MOXX",
    "createdAt": null,
    "employeeId": null,
    "tmAppID": null,
    "hasPRPCOrders": false,
    "employee": true
  },
  "properties": {
    "clientName": "ООО \"АВТОДОР\"",
    "useDadata": true,
    "legalType": "legal",
    "inn": "7451431605",
    "ogrn": "1187456001149",
    "fullName": "Путинцева Наталья Владимировна",
    "regDate": null,
    "address": "454091, ОБЛАСТЬ ЧЕЛЯБИНСКАЯ, ГОРОД ЧЕЛЯБИНСК, УЛИЦА СВОБОДЫ, ДОМ 185, НЕЖ.ПОМ.153 ОФИС 9/2",
    "cityId": 65,
    "city": "Челябинск",
    "region": 74,
    "branchMnemonic": "EKCH",
    "branch": "Операционный офис \"Челябинский\"   филиала \"Екатеринбургский\"",
    "branchAddress": "ул. Кирова, д. 108",
    "phone": "79165926645",
    "email": "1@rt.eu",
    "step": "companyInfo",
    "lastName": "Путинцева",
    "firstName": "Наталья",
    "middleName": "Владимировна",
    "services": {
      "rko": {
        "isSelected": true,
        "isBlocked": true,
        "accounts": [
          {
            "type": "CA",
            "currency": "RUR",
            "number": "40702810238090000012"
          }
        ]
      },
      "salaryProject": {
        "isSelected": true,
        "isBlocked": true
      },
      "partnersProgram": {
        "isSelected": false
      }
    },
    "comment": null,
    "scoring": {
      "scorings": [
        {
          "type": "reputationScoring",
          "name": "Репутационный скоринг",
          "result": "Положительный",
          "color": "green",
          "comment": "-"
        },
        {
          "type": "complianceScoring",
          "name": "Комплаенс прескоринг",
          "result": "Отрицательный",
          "color": "red",
          "comment": "Зона Красная, результат скоринга 0.818"
        }
      ],
      "isDeclined": true,
      "blockedServices": [
        "rko",
        "salaryProject"
      ],
      "clientMsg": "Дорогой предприниматель, спасибо за обращение в Альфа-Банк! К сожалению, мы не можем одобрить подключение следующих продуктов для вашей компании: Расчетный счет, Зарплатный проект. Успехов в бизнесе!"
    },
    "uPin": "UAMYAQ"
  },
  "files": []
}

this.props.products[item.type].isBlocked,

then((res) => { // eslint-disable-line
            // const { scoring } = this.data.properties;
            // console.log(122, scoring);
            console.log(123, res);
            addOrder(res.data);
            // orderFinishLoading();
            // const orderId = res.data && res.data.id;
            // const statusCode = res.data && res.data.status && res.data.status.code;
            // const { products, orderMeta } = this.props;
            // if (scoring) {
            //     this.setState({
            //         scoringClientMsg: res.data.scoring.clientMsg,
            //         scorings: res.data.scoring.scorings,
            //         scoringModalVisible: true,
            //         scoringEmployee: this.props.userType === USER_TYPE_EMPLOYEE,
            //         onModalCloseFunc: statusCode === STATUS_TYPES.draft_declined
            //             ? () => {}
            //             : () => { this.reserveAccount(products, orderMeta, settings, orderId); }
            //     });
            // } else {
            //     return this.reserveAccount(products, orderMeta, settings, orderId);
            // }
        }).catch(error => this.props.apiFetchingFailure(error, true));

{

  "created": 1523882703940,
  "modified": 1523974051525,
  "id": "eyJvcmRlcklkIjoiNWFkNDlhY2ZlZTM1ODgwMDAxMjZkODEzIiwic3lzdGVtQ29kZSI6IkFPIn0",
  "type": "ORDER_TYPE_NEW_CLIENT",
  "status": {
    "name": "Отклонено",
    "code": "draft_declined",
    "declined": true,
    "draft": true
  },
  "user": {
    "login": "OPENACCOUNT_ONA",
    "type": "employee",
    "id": {
      "timestamp": 1515501409,
      "machineIdentifier": 15885534,
      "processIdentifier": 1,
      "counter": 3818429,
      "timeSecond": 1515501409,
      "time": 1515501409000,
      "date": 1515501409000
    },
    "name": "Фронтовик Фронт Фронтович",
    "position": "разработчик",
    "branch": "MOXX",
    "createdAt": null,
    "employeeId": null,
    "tmAppID": "HASDRAFT",
    "hasPRPCOrders": false,
    "employee": true
  },
  "properties": {
    "clientName": "ООО \"АВТОДОР\"",
    "useDadata": true,
    "legalType": "legal",
    "inn": "7451431605",
    "ogrn": "1187456001149",
    "fullName": "Путинцева Наталья Владимировна",
    "regDate": null,
    "address": "454091, ОБЛАСТЬ ЧЕЛЯБИНСКАЯ, ГОРОД ЧЕЛЯБИНСК, УЛИЦА СВОБОДЫ, ДОМ 185, НЕЖ.ПОМ.153 ОФИС 9/2",
    "cityId": 65,
    "city": "Челябинск",
    "region": 74,
    "branchMnemonic": "EKCH",
    "branch": "Операционный офис \"Челябинский\"   филиала \"Екатеринбургский\"",
    "branchAddress": "ул. Кирова, д. 108",
    "phone": "79165926645",
    "email": "1@rt.eu",
    "step": "companyInfo",
    "lastName": "Путинцева",
    "firstName": "Наталья",
    "middleName": "Владимировна",
    "services": {
      "rko": {
        "isSelected": true,
        "accounts": [
          {
            "type": "CA",
            "currency": "RUR",
            "number": "40702810238090000012"
          }
        ],
        "isBlocked": true
      },
      "salaryProject": {
        "isSelected": true,
        "isBlocked": true
      },
      "partnersProgram": {
        "isSelected": false,
        "isBlocked": false
      }
    },
    "comment": "Дорогой предприниматель, спасибо за обращение в Альфа-Банк! К сожалению, мы не можем одобрить подключение следующих продуктов для вашей компании: Расчетный счет, Зарплатный проект. Успехов в бизнесе!",
    "uPin": "UAMYAQ",
    "codeword": "1w",
    "employeesQuantity": "15",
    "annualRevenue": "1",
    "salaryFund": "1",
    "turnover": "1 123",
    "taxSystem": "1",
    "isActualAddress": "eq",
    "actualAddress": null,
    "ownership": {
      "type": "Ownership"
    },
    "scoring": {
      "scorings": [
        {
          "type": "reputationScoring",
          "name": "Репутационный скоринг",
          "result": "Положительный",
          "color": "green",
          "comment": "-"
        },
        {
          "type": "complianceScoring",
          "name": "Комплаенс прескоринг",
          "result": "Отрицательный",
          "color": "red",
          "comment": "Зона Красная, результат скоринга 0.793"
        }
      ],
      "isDeclined": true,
      "clientMsg": "Дорогой предприниматель, спасибо за обращение в Альфа-Банк! К сожалению, мы не можем одобрить подключение следующих продуктов для вашей компании: Расчетный счет, Зарплатный проект. Успехов в бизнесе!",
      "blockedServices": [
        "rko",
        "salaryProject"
      ]
    }
  },
  "files": []
}

{
  "created": 1523882703940,
  "modified": 1523970737647,
  "id": "eyJvcmRlcklkIjoiNWFkNDlhY2ZlZTM1ODgwMDAxMjZkODEzIiwic3lzdGVtQ29kZSI6IkFPIn0",
  "type": "ORDER_TYPE_NEW_CLIENT",
  "status": {
    "name": "Отклонено",
    "code": "draft_declined",
    "declined": true,
    "draft": true
  },
  "user": {
    "login": "OPENACCOUNT_ONA",
    "type": "employee",
    "id": {
      "timestamp": 1515501409,
      "machineIdentifier": 15885534,
      "processIdentifier": 1,
      "counter": 3818429,
      "timeSecond": 1515501409,
      "time": 1515501409000,
      "date": 1515501409000
    },
    "name": "Фронтовик Фронт Фронтович",
    "position": "разработчик",
    "branch": "MOXX",
    "createdAt": null,
    "employeeId": null,
    "tmAppID": "HASDRAFT",
    "hasPRPCOrders": false,
    "employee": true
  },
  "properties": {
    "clientName": "ООО \"АВТОДОР\"",
    "useDadata": true,
    "legalType": "legal",
    "inn": "7451431605",
    "ogrn": "1187456001149",
    "fullName": "Путинцева Наталья Владимировна",
    "regDate": null,
    "address": "454091, ОБЛАСТЬ ЧЕЛЯБИНСКАЯ, ГОРОД ЧЕЛЯБИНСК, УЛИЦА СВОБОДЫ, ДОМ 185, НЕЖ.ПОМ.153 ОФИС 9/2",
    "cityId": 65,
    "city": "Челябинск",
    "region": 74,
    "branchMnemonic": "EKCH",
    "branch": "Операционный офис \"Челябинский\"   филиала \"Екатеринбургский\"",
    "branchAddress": "ул. Кирова, д. 108",
    "phone": "79165926645",
    "email": "1@rt.eu",
    "step": "companyInfo",
    "lastName": "Путинцева",
    "firstName": "Наталья",
    "middleName": "Владимировна",
    "services": {
      "rko": {
        "isSelected": true,
        "accounts": [
          {
            "type": "CA",
            "currency": "RUR",
            "number": "40702810238090000012"
          }
        ],
        "isBlocked": true
      },
      "salaryProject": {
        "isSelected": true,
        "isBlocked": true
      },
      "partnersProgram": {
        "isSelected": false,
        "isBlocked": false
      }
    },
    "comment": "Дорогой предприниматель, спасибо за обращение в Альфа-Банк! К сожалению, мы не можем одобрить подключение следующих продуктов для вашей компании: Расчетный счет, Зарплатный проект. Успехов в бизнесе!",
    "uPin": "UAMYAQ",
    "codeword": "1w",
    "employeesQuantity": "15",
    "annualRevenue": "1",
    "salaryFund": "1",
    "turnover": "1 123",
    "taxSystem": "1",
    "isActualAddress": "eq",
    "actualAddress": null,
    "ownership": {
      "type": "Ownership"
    },
    "scoring": {
      "scorings": [
        {
          "type": "reputationScoring",
          "name": "Репутационный скоринг",
          "result": "Положительный",
          "color": "green",
          "comment": "-"
        },
        {
          "type": "complianceScoring",
          "name": "Комплаенс прескоринг",
          "result": "Отрицательный",
          "color": "red",
          "comment": "Зона Красная, результат скоринга 0.793"
        }
      ],
      "isDeclined": true,
      "clientMsg": "Дорогой предприниматель, спасибо за обращение в Альфа-Банк! К сожалению, мы не можем одобрить подключение следующих продуктов для вашей компании: Расчетный счет, Зарплатный проект. Успехов в бизнесе!",
      "blockedServices": [
        "rko",
        "salaryProject"
      ]
    }
  },
  "files": []
}

{
  "created": 1523882703940,
  "modified": 1523970249828,
  "id": "eyJvcmRlcklkIjoiNWFkNDlhY2ZlZTM1ODgwMDAxMjZkODEzIiwic3lzdGVtQ29kZSI6IkFPIn0",
  "type": "ORDER_TYPE_NEW_CLIENT",
  "status": {
    "name": "Отклонено",
    "code": "draft_declined",
    "declined": true,
    "draft": true
  },
  "user": {
    "login": "OPENACCOUNT_ONA",
    "type": "employee",
    "id": {
      "timestamp": 1515501409,
      "machineIdentifier": 15885534,
      "processIdentifier": 1,
      "counter": 3818429,
      "timeSecond": 1515501409,
      "time": 1515501409000,
      "date": 1515501409000
    },
    "name": "Фронтовик Фронт Фронтович",
    "position": "разработчик",
    "branch": "MOXX",
    "createdAt": null,
    "employeeId": null,
    "tmAppID": "HASDRAFT",
    "hasPRPCOrders": false,
    "employee": true
  },
  "properties": {
    "clientName": "ООО \"АВТОДОР\"",
    "useDadata": true,
    "legalType": "legal",
    "inn": "7451431605",
    "ogrn": "1187456001149",
    "fullName": "Путинцева Наталья Владимировна",
    "regDate": null,
    "address": "454091, ОБЛАСТЬ ЧЕЛЯБИНСКАЯ, ГОРОД ЧЕЛЯБИНСК, УЛИЦА СВОБОДЫ, ДОМ 185, НЕЖ.ПОМ.153 ОФИС 9/2",
    "cityId": 65,
    "city": "Челябинск",
    "region": 74,
    "branchMnemonic": "EKCH",
    "branch": "Операционный офис \"Челябинский\"   филиала \"Екатеринбургский\"",
    "branchAddress": "ул. Кирова, д. 108",
    "phone": "79165926645",
    "email": "1@rt.eu",
    "step": "companyInfo",
    "lastName": "Путинцева",
    "firstName": "Наталья",
    "middleName": "Владимировна",
    "services": {
      "rko": {
        "isSelected": true,
        "accounts": [
          {
            "type": "CA",
            "currency": "RUR",
            "number": "40702810238090000012"
          }
        ],
        "isBlocked": true
      },
      "salaryProject": {
        "isSelected": true,
        "isBlocked": true
      },
      "partnersProgram": {
        "isSelected": false,
        "isBlocked": false
      }
    },
    "comment": "Дорогой предприниматель, спасибо за обращение в Альфа-Банк! К сожалению, мы не можем одобрить подключение следующих продуктов для вашей компании: Расчетный счет, Зарплатный проект. Успехов в бизнесе!",
    "uPin": "UAMYAQ",
    "codeword": "1w",
    "employeesQuantity": "15",
    "annualRevenue": "1",
    "salaryFund": "1",
    "turnover": "1 123",
    "taxSystem": "1",
    "isActualAddress": "eq",
    "actualAddress": null,
    "ownership": {
      "type": "Ownership"
    },
    "scoring": {
      "scorings": [
        {
          "type": "reputationScoring",
          "name": "Репутационный скоринг",
          "result": "Положительный",
          "color": "green",
          "comment": "-"
        },
        {
          "type": "complianceScoring",
          "name": "Комплаенс прескоринг",
          "result": "Отрицательный",
          "color": "red",
          "comment": "Зона Красная, результат скоринга 0.793"
        }
      ],
      "isDeclined": true,
      "clientMsg": "Дорогой предприниматель, спасибо за обращение в Альфа-Банк! К сожалению, мы не можем одобрить подключение следующих продуктов для вашей компании: Расчетный счет, Зарплатный проект. Успехов в бизнесе!",
      "blockedServices": [
        "rko",
        "salaryProject"
      ]
    }
  },
  "files": []
}

{
  "created": 1523882703940,
  "modified": 1523969227754,
  "id": "eyJvcmRlcklkIjoiNWFkNDlhY2ZlZTM1ODgwMDAxMjZkODEzIiwic3lzdGVtQ29kZSI6IkFPIn0",
  "type": "ORDER_TYPE_NEW_CLIENT",
  "status": {
    "name": "Отклонено",
    "code": "draft_declined",
    "declined": true,
    "draft": true
  },
  "user": {
    "login": "OPENACCOUNT_ONA",
    "type": "employee",
    "id": {
      "timestamp": 1515501409,
      "machineIdentifier": 15885534,
      "processIdentifier": 1,
      "counter": 3818429,
      "timeSecond": 1515501409,
      "time": 1515501409000,
      "date": 1515501409000
    },
    "name": "Фронтовик Фронт Фронтович",
    "position": "разработчик",
    "branch": "MOXX",
    "createdAt": null,
    "employeeId": null,
    "tmAppID": "HASDRAFT",
    "hasPRPCOrders": false,
    "employee": true
  },
  "properties": {
    "clientName": "ООО \"АВТОДОР\"",
    "useDadata": true,
    "legalType": "legal",
    "inn": "7451431605",
    "ogrn": "1187456001149",
    "fullName": "Путинцева Наталья Владимировна",
    "regDate": null,
    "address": "454091, ОБЛАСТЬ ЧЕЛЯБИНСКАЯ, ГОРОД ЧЕЛЯБИНСК, УЛИЦА СВОБОДЫ, ДОМ 185, НЕЖ.ПОМ.153 ОФИС 9/2",
    "cityId": 65,
    "city": "Челябинск",
    "region": 74,
    "branchMnemonic": "EKCH",
    "branch": "Операционный офис \"Челябинский\"   филиала \"Екатеринбургский\"",
    "branchAddress": "ул. Кирова, д. 108",
    "phone": "79165926645",
    "email": "1@rt.eu",
    "step": "companyInfo",
    "lastName": "Путинцева",
    "firstName": "Наталья",
    "middleName": "Владимировна",
    "services": {
      "rko": {
        "isSelected": true,
        "accounts": [
          {
            "type": "CA",
            "currency": "RUR",
            "number": "40702810238090000012"
          }
        ],
        "isBlocked": true
      },
      "salaryProject": {
        "isSelected": true,
        "isBlocked": true
      },
      "partnersProgram": {
        "isSelected": false,
        "isBlocked": false
      }
    },
    "comment": "Дорогой предприниматель, спасибо за обращение в Альфа-Банк! К сожалению, мы не можем одобрить подключение следующих продуктов для вашей компании: Расчетный счет, Зарплатный проект. Успехов в бизнесе!",
    "uPin": "UAMYAQ",
    "codeword": "1w",
    "employeesQuantity": "15",
    "annualRevenue": "1",
    "salaryFund": "1",
    "turnover": "1 123",
    "taxSystem": "1",
    "isActualAddress": "eq",
    "actualAddress": null,
    "ownership": {
      "type": "Ownership"
    },
    "scoring": {
      "scorings": [
        {
          "type": "reputationScoring",
          "name": "Репутационный скоринг",
          "result": "Положительный",
          "color": "green",
          "comment": "-"
        },
        {
          "type": "complianceScoring",
          "name": "Комплаенс прескоринг",
          "result": "Отрицательный",
          "color": "red",
          "comment": "Зона Красная, результат скоринга 0.793"
        }
      ],
      "showMsg": true,
      "isDeclined": true,
      "clientMsg": "Дорогой предприниматель, спасибо за обращение в Альфа-Банк! К сожалению, мы не можем одобрить подключение следующих продуктов для вашей компании: Расчетный счет, Зарплатный проект. Успехов в бизнесе!",
      "blockedServices": [
        "rko",
        "salaryProject"
      ]
    }
  },
  "files": []
}


{
  "properties": {
    "services": {
      "rko": {
        "isSelected": true,
        "accounts": [
          {
            "type": "CA",
            "currency": "RUR",
            "number": "40702810238090000012"
          }
        ]
      },
      "salaryProject": {
        "isSelected": false
      },
      "partnersProgram": {
        "isSelected": false
      }
    },
    "step": "products"
  }
}


{"created":1523882703940,"modified":1523964335475,"id":"eyJvcmRlcklkIjoiNWFkNDlhY2ZlZTM1ODgwMDAxMjZkODEzIiwic3lzdGVtQ29kZSI6IkFPIn0","type":"ORDER_TYPE_NEW_CLIENT","status":{"name":"Отклонено","code":"draft_declined","declined":true,"draft":true},"user":{"login":"OPENACCOUNT_ONA","type":"employee","id":{"timestamp":1515501409,"machineIdentifier":15885534,"processIdentifier":1,"counter":3818429,"timeSecond":1515501409,"time":1515501409000,"date":1515501409000},"name":"Фронтовик Фронт Фронтович","position":"разработчик","branch":"MOXX","createdAt":null,"employeeId":null,"tmAppID":"HASDRAFT","hasPRPCOrders":false,"employee":true},"properties":{"clientName":"ООО \\"АВТОДОР\\"","useDadata":true,"legalType":"legal","inn":"7451431605","ogrn":"1187456001149","fullName":"Путинцева Наталья Владимировна","regDate":null,"address":"454091, ОБЛАСТЬ ЧЕЛЯБИНСКАЯ, ГОРОД ЧЕЛЯБИНСК, УЛИЦА СВОБОДЫ, ДОМ 185, НЕЖ.ПОМ.153 ОФИС 9/2","cityId":65,"city":"Челябинск","region":74,"branchMnemonic":"EKCH","branch":"Операционный офис \\"Челябинский\\"   филиала \\"Екатеринбургский\\"","branchAddress":"ул. Кирова, д. 108","phone":"79165926645","email":"1@rt.eu","step":"products","lastName":"Путинцева","firstName":"Наталья","middleName":"Владимировна","services":{"rko":{"isSelected":true,"accounts":[{"type":"CA","currency":"RUR","number":"40702810238090000012"}]},"salaryProject":{"isSelected":true},"partnersProgram":{"isSelected":false}},"comment":"Дорогой предприниматель, спасибо за обращение в Альфа-Банк! К сожалению, мы не можем одобрить подключение следующих продуктов для вашей компании: Расчетный счет, Зарплатный проект. Успехов в бизнесе!","uPin":"UAMYAQ","codeword":"1w","employeesQuantity":"15","annualRevenue":"1","salaryFund":"1","turnover":"1 123","taxSystem":"1","isActualAddress":"eq","actualAddress":null,"ownership":{"type":"Ownership"}},"files":[]}
 
{ codeword: '1w',
  employeesQuantity: '15',
  annualRevenue: '1',
  salaryFund: '1',
  turnover: '1 123',
  taxSystem: '1',
  isActualAddress: 'eq',
  actualAddress: null,
  ownership: { type: 'Ownership' },
  step: 'quest' }
17-04-2018 11:22:34 - info: SERVER REQUEST 
{ method: 'PATCH',
  url: 'http://ufrmstest1/ona-orders-ao-api/orders/eyJvcmRlcklkIjoiNWFkNDlhY2ZlZTM1ODgwMDAxMjZkODEzIiwic3lzdGVtQ29kZSI6IkFPIn0',
  body: '{"properties":{"codeword":"1w","employeesQuantity":"15","annualRevenue":"1","salaryFund":"1","turnover":"1 123","taxSystem":"1","isActualAddress":"eq","actualAddress":null,"ownership":{"type":"Ownership"},"step":"quest"}}',
  app_id: 'ona-ao-ui',
  app_host: 'ufrmstest1',
  app_port: 8080,
  container_id: undefined,
  timestamp: 1523964154837,
  user_id: undefined,
  company_id: undefined,
  trace_id: undefined }

[{
    data: {
        result: 'Положительный',
        color: 'green',
        comment: '-',
        name: 'Репутационный скоринг'
    }
},
{ 
    data: {
        name: 'Комплаенс прескоринг',
        result: 'Отрицательный',
        color: 'red',
        comment: 'Зона Красная, результат скоринга 0.91' },
        declineOrder: true,
        showMessage: true
    }
]

// TODO 
scoring: {
    clientMsg,
    isDeclined,
    showMsg,
    declinedServices: ['rno', 'salaryProject'],
    scorings: [
    {
        name: 'Комплаенс прескоринг',
        result: 'Отрицательный',
        color: 'red',
        comment: 'Зона Красная, результат скоринга 0.91' },
        services:['rno', 'salaryProject']
    },
    {
        result: 'Положительный',
        color: 'green',
        comment: '-',
        name: 'Репутационный скоринг',
        services:['rno']
    }]
}

// AS IS 3
{
  "scoring": {
    "scorings": [
      {
        "type": "reputationScoring",
        "name": "Репутационный скоринг",
        "result": "Положительный",
        "color": "green",
        "comment": "-"
      },
      {
        "type": "complianceScoring",
        "name": "Комплаенс прескоринг",
        "result": "Отрицательный",
        "color": "red",
        "comment": "Зона Красная, результат скоринга 0.793"
      }
    ],
    "showMsg": true,
    "isDeclined": true,
    "clientMsg": "Дорогой предприниматель, спасибо за обращение в Альфа-Банк! К сожалению, мы не можем одобрить подключение следующих продуктов для вашей компании: Расчетный счет, Зарплатный проект. Успехов в бизнесе!",
    "declinedServices": [
      "rko",
      "salaryProject"
    ]
  }
}

//AS IS 2
{
  "scoring": {
    "scorings": [
      {
        "type": "complianceScoring",
        "name": "Комплаенс прескоринг",
        "result": "Отрицательный",
        "color": "red",
        "comment": "Зона Красная, результат скоринга 0.777"
      }
    ],
    "isDeclined": true,
    "showMsg": true,
    "clientMsg": "Дорогой предприниматель, спасибо за обращение в Альфа-Банк! К сожалению, мы не можем одобрить подключение следующих продуктов для вашей компании: Расчетный счет. Успехов в бизнесе!"
  }
}

// AS IS
{
  "scoring": {
    "scorings": [
      {
        "result": "Положительный",
        "color": "green",
        "comment": "-",
        "name": "Репутационный скоринг"
      },
      {
        "name": "Комплаенс прескоринг",
        "result": "Отрицательный",
        "color": "red",
        "comment": "Зона Красная, результат скоринга 0.777"
      }
    ],
    "isDeclined": true,
    "showMsg": true,
    "clientMsg": "Дорогой предприниматель, спасибо за обращение в Альфа-Банк!\nК сожалению, мы не можем одобрить подключение {Расчетного счета} для вашей компании. Успехов в бизнесе!"
  }
}

const config = {
    'active': true,
    'params': {
        'red': 0.9,
        'yellow': 0.2
    },
    'services': ['rko', 'salaryProject', 'partnersProgram']
}

const srv2 = {
    "rko": {
      "isSelected": true
    },
    "salaryProject": {
      "isSelected": true
    },
    "partnersProgram": {
      "isSelected": false
    }
}


function needScoring({ active, services: scoringServices }, selectedServices) {
    if (!active) return false;
    const numberOfServicesNeedScoring = scoringServices.reduce((prev, srv) => prev + (selectedServices[srv].isSelected), 0);
    return (numberOfServicesNeedScoring > 0);
}

console.log(needScoring(config, srv2));
// function needScoring() {
//     if (true) return false;
// }

// console.log(needScoring());


// function check() {
//     return false;
// }

// if (check()) {
//     console.log('ok');
// }

// const a = 200;
// const b = 200 / 100;
// console.log(b);
// const a = (200 / 100) !== 2;
// console.log(a);