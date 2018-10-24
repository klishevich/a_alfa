var Benchmark = require( 'benchmark')
var Immutable = require("immutable")

var suite = new Benchmark.Suite;

var json = {
    "hello": [
      {
        "type": 50.087977,
        "longitude": 72.167197,
        "tags": [
          "nulla",
          "ullamco"
        ],
        "friends": [
          {
            "id": 0,
            "name": "Robinson Woods"
          },
          {
            "id": 1,
            "name": "Lottie Hogan"
          }
        ]
      },
      {
        "optionalField": "hello",
        "type": 47.460772,
        "longitude": 85.95137,
        "tags": [
          "aliqua",
          "nulla"
        ],
        "friends": [
          {
            "id": 0,
            "name": "Mamie Wyatt"
          },
          {
            "id": 1,
            "name": "Alejandra Mcdaniel"
          }
        ]
      }
    ]
  }

var state = Immutable.fromJS(json)

// var friends = state.getIn(['hello', 'friends'])
// console.log(friends);

// add tests
suite.add('getIn', function() {
  var friends = state.getIn(['hello', 'friends'])
  var tags = state.getIn(['hello', 'tags'])
})
.add('toJS', function() {
  const {friends, tags}= state.getIn(['hello']).toJS()
})

// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });
