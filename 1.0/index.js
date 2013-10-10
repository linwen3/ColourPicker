/**
 * @fileoverview 
 * @author lanmeng.bhy<lanmeng.bhy@taobao.com>
 * @module colour-picker
 **/
KISSY.add(function (S, Node,Base) {
    var EMPTY = '';
    var $ = Node.all;
    /**
     * 
     * @class Colour-picker
     * @constructor
     * @extends Base
     */
    function Colour-picker(comConfig) {
        var self = this;
        //调用父类构造函数
        Colour-picker.superclass.constructor.call(self, comConfig);
    }
    S.extend(Colour-picker, Base, /** @lends Colour-picker.prototype*/{

    }, {ATTRS : /** @lends Colour-picker*/{

    }});
    return Colour-picker;
}, {requires:['node', 'base']});



