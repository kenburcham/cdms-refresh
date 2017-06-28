var GridObjectTest = require('../../test/e2e/gridObjectTestUtils.spec.js');
var grid1 = new GridObjectTest('grid1');
describe('101 tutorial', function() {
  it('grid should have three visible rows', function () {
    grid1.expectRowCount( 3 );
  });

  it('header values should be as expected', function () {
    grid1.expectHeaderColumns( ['First Name', 'Last Name', 'Company', 'Employed'] );
  });

  it('first row cell values should be as expected', function () {
    // checking individual cells usually gives a better stack trace when there are errors
    grid1.expectCellValueMatch( 0, 0, 'Cox' );
    grid1.expectCellValueMatch( 0, 1, 'Carney' );
    grid1.expectCellValueMatch( 0, 2, 'Enormo' );
    grid1.expectCellValueMatch( 0, 3, 'true' );
  });

  it('next two row cell values should be as expected', function () {
    // checking in bulk is convenient to write, but can be less informative with errors
    grid1.expectRowValuesMatch( 1, [ 'Lorraine', 'Wise', 'Comveyer', 'false' ] );
    grid1.expectRowValuesMatch( 2, [ 'Nancy', 'Waters', 'Fuelton', 'false' ] );
  });
});
