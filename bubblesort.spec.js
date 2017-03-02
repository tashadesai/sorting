describe('Bubble Sort', function(){
  // before(function () {
  // spyOn(swap).and.callThrough(); // replace existing `tootsiepop['eat']` method
  // });
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles an unsorted array', function(){
    expect( bubbleSort([3, 4, 1, 7, 9, 10, 2, 1]) ).toEqual( [1, 1, 2, 3, 4, 7, 9, 10] );
  });
  it('handles an already sorted array', function(){
    expect( bubbleSort([1, 1, 2, 3, 4, 7, 9, 10]) ).toEqual( [1, 1, 2, 3, 4, 7, 9, 10] );
  });
});
