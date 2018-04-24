foo = function(){
    var bar = Math.random() > .5;
    console.log(bar);
    omgalabel: try {
        if ( bar ) {
            console.log('if', bar );
            break omgalabel;
        }
        console.log('not if', bar );
        // code 
    }
    catch( e ){
        //  This code should not execute if !!bar 
        console.log('catch');
    }
    finally {
        // Code that executes no matter what
        console.log( true );
    }
}

foo();