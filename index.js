/**
 * @file mofron-comp-frmaccordion/index.js
 * @brief frame accordion component for mofron
 * @license MIT
 */
const Frame      = require('mofron-comp-frame');
const Radio      = require('mofron-comp-radio');
const Selectable = require('mofron-effect-selectable');
const loMargin   = require('mofron-layout-margin');
const Click      = require('mofron-event-click');
const ConfArg    = mofron.class.ConfArg;
const comutl     = mofron.util.common;

module.exports = class extends Radio {
    /**
     * initialize component
     * 
     * @param (mixed) 
     *                key-value: component config
     * @short 
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.modname('FrameRadio');
            
	    /* init config */

	    if (0 < arguments.length) {
                this.config(p1);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    initDomConts () {
        try {
	    this.rootDom(new mofron.class.Dom("div",this));

            this.child(this.frame());
            this.childDom(this.frame().childDom());
            
            this.radio().changeEvent((s1,s2,s3) => {
                if (false === s2) {
                    s3.clear();
                }
	    },this);

            this.child(this.radio());
            
	    this.confmng().delete("rootDom");
            this.rootDom(this.frame().rootDom()[0]);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    beforeRender () {
        try {
	    super.beforeRender();
	    this.frame().effect(new Selectable({ baseColor:this.accentColor() }));
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    afterRender () {
       try {
           super.afterRender();
           if (true === this.radio().select()) {
               let eid = this.frame().effect({ modname:'selectable' }).eid();
               this.frame().execEffect(eid);
           }
       } catch (e) {
            console.error(e.stack);
            throw e;
        } 
    }

    select (prm) {
        try {
	    if (undefined === prm) {
                return this.radio().select();
	    }
	    if ((true === prm) && (true === this.isExists())) {
                this.radio().childDom().getRawDom().click();
	    }
	    this.radio().select(prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    selectEvent (fnc,prm) {
        try {
	    let sel_evt = (s1,s2,s3) => {
                try {
                    if ((true === s2) && ('function' === typeof fnc)) {
                        fnc(s1,s2,s3);
		    }
		} catch (e) {
                    console.error(e.stack);
                    throw e;
		}
	    }
	    return this.radio().changeEvent(sel_evt,prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    frame (prm,cnf) {
        try {
            if (true === comutl.isinc(prm,'Frame')) {
                let clk_evt = (c1,c2,c3) => { c3.select(true); };
                prm.event(
                    new Click(new ConfArg(clk_evt,this))
                );
            }
            return this.innerComp('frame', prm, Frame);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    clear () {
        try {
            this.radio().clear();
            this.frame().effect({ modname:'selectable' }).clear();
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    radio (prm, cnf) {
        try {
	    if (true === comutl.isinc(prm,'Radio')) {
		prm.config(cnf);
	    }
            return this.innerComp('radio', prm, Radio);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
    
    group (prm) {
        try {
            return this.radio().group(prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
}
/* end of file */
