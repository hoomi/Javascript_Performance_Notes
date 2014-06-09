var path;

function largStr() {
    return new Array(1000000).join('x');
}

function Item() {
    this.content = largStr();
}

function createObjects() {
    var item = new Item(),
        Z1 = {child1:item},
        Z2 = {child1:item},
        Y1 = {child1:Z1, 
                child2:Z2},
        Y2 = {},
        X1 = {child1:Y1},
        X2 = {child1:Y1},
        X3 = {child1:Y2},
        W = {child1:X1,child2:X2,child3:X3};
        
    path = W;
}