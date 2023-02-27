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
            

	    let clk_evt = (c1,c2,c3) => {
                try {
		    if (true === c1.radio().select()) {
                        return;
		    }
		    c1.radio().select(true);
                    let ev = c1.selectEvent();
                    for (let ev_idx in ev) {
                        ev[ev_idx][0](c1, c2, ev[ev_idx][1]);
                    }
		} catch (e) {
                    console.error(e.stack);
                    throw e;
		}
	    }
            this.event(new Click(clk_evt));

	    //this.radio().childDom().parent().style({ 'margin':'auto' });
            this.child(this.radio());
            
	    this.confmng().delete("rootDom");
            this.rootDom(this.frame().rootDom()[0]);
/*
                        <Radio style="margin:auto;" padding=0.05rem group=api_plan></Radio>
                        <div layout=HrzCenter:80>
                            <LinerTxt size=0.25rem weight=700 accent-color=[85,180,130]>
                                <style>text-align:center;</style>
                                <text>Free</text>
                            </LinerTxt>
                        </div>
                        <Text size=0.2rem style="text-align:center;">"$0/month"</Text>
                        <Text size=0.18rem style="text-align:center;">detail</Text>
*/

        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    beforeRender () {
        try {
            //this.frame().effect({ modname:'selectable' }).baseColor(this.accentColor());
	    this.frame().effect(new Selectable({ baseColor:this.accentColor() }));
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    selectEvent (fnc,prm) {
        try {
	    return this.changeEvent(fnc,prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    frame (prm,cnf) {
        try {
            if (true === comutl.isinc(prm,'Frame')) {
                prm.config({
		    //effect: new Selectable(),
                    layout: new loMargin('top','0.15rem'),
                });
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
