﻿try { window.scriptsLoaded = window.scriptsLoaded || {}; window.scriptProcessStart = window.scriptProcessStart || {}; window.scriptProcessStart['microsoft.exchange.clients.owa2.client.core.personacardfacade.js'] = (new Date()).getTime();
Type.registerNamespace("_pcf");function PersonaCardFacadeComponent(){}PersonaCardFacadeComponent.prototype={$2FV:function(n,t,i){var f=this;n.$r(_pcf.$oR).$t(function(){return new _pcf.$oR(window.document.createElement("div"),n.$2(_b.$1U),n.$2(_y.$W),n.$2(_a.$1x))});var e=this;n.$r(_pcf.$oS).$2a(IPersonaCardViewModelFactory).$1I().$t(function(){return new _pcf.$oS(n.$2(_y.$W),n.$3K(IChatProviderFactory),n.$3K(IModernGroupCardViewModelFactory),n.$3K(IReadPersonaCardViewModelFactory),n.$3K(IGroupCardViewModelFactory),n.$3K(ILocationCardViewModelFactory),n.$3K(IComposePersonaCardViewModelFactory))});var r=this;n.$r(IModernGroupCardFacade).$1I().$t(function(){var t=n.$2(_pcf.$Jb);return t.$9(new _bc.$Eh,0)});var u=this;n.$r(_pcf.$Jb).$2a(IPersonaCardFacadeViewModelFactory).$1I().$t(function(){return new _pcf.$Jb(n.$2(_y.$W),n.$2(_a.$1d),n.$3K(IChatProviderFactory),n.$2(_pcf.$oS),n.$2(IMailComposeLauncher))})},$Bl5:function(){return[]}};_pcf.$Jb=function(n,t,i,r,u){this.$I=n;this.$1D=t;this.$K2=i;this.$10J=r;this.$13c=u};_pcf.$Jb.prototype={$I:null,$1D:null,$K2:null,$13c:null,$10J:null,$9:function(n,t){return new _pcf.$IY(n,t,this.$10J,this.$1D,this.$I,this.$13c)},$wd:function(n,t,i){throw Error.notImplemented();},$1CS:function(n,t,i){var u=n;var r=this.$9(new _bc.$Eh,3);r.$CJ5(u);this.$4sa();return r},$4sa:function(){if(this.$I.get_$U()==="Mouse"){var n=this;this.$K2.$9(function(n){_g.$1H.$Yw.$4sa(n.$9())})}}};_pcf.$oS=function(n,t,i,r,u,f,e){this.$I=n;this.$K2=t;this.$1Mj=i;this.$6wr=r;this.$4ph=u;this.$6XD=f;this.$5sh=e};_pcf.$oS.prototype={$I:null,$K2:null,$6wr:null,$4ph:null,$6XD:null,$5sh:null,$1Mj:null,$AM1:function(n,t,i,r,u,f,e,o){switch(n.get_$21()){case 5:this.$AM5(n,t,u,f,e,o);break;case 2:this.$AM2(n,t,u,f,o);break;default:this.$AM7(n,t,u,f,o);break}},$AQJ:function(n,t,i,r,u,f,e){switch(n.get_$21()){case 2:this.$AQK(n,t,r,u,f);break;case 4:this.$AQN(n,t,r,u,f);break;case 5:this.$AQO(n,t,r,u,f);break;default:this.$AQR(n,e,r,u,f);break}},$AQR:function(n,t,i,r,u){var f=this;this.$6wr.$9(function(f){f.$9(n,t,i,r,u)})},$AQO:function(n,t,i,r,u){if(this.$I.get_$U()!=="Mouse"){var e=this;this.$1Mj.$9(function(f){var e=f.$7hS(n,i,t,null,r);e.$3e();u(e)})}else{var f=this;this.$K2.$9(function(e){f.$1Mj.$9(function(f){var o=f.$7hS(n,i,t,e.$9(),r);o.$3e();u(o)})})}},$AM5:function(n,t,i,r,u,f){var e=this;this.$1Mj.$9(function(e){var o=e.$AM6(n,t,i,r,u);o.$3e();f(o)})},$AM7:function(n,t,i,r,u){var f=this;this.$5sh.$9(function(f){var e=f.$AM8(n,t,i,r);e.$3e();u(e)})},$AM2:function(n,t,i,r,u){var f=this;this.$4ph.$9(function(f){var e=f.$AM3(n,t,i,r);e.$3e();u(e)})},$AQN:function(n,t,i,r,u){var f=this;this.$6XD.$9(function(e){if(f.$I.get_$U()!=="Mouse"){var o=e.$7hK(n,i,t,null,r);o.$3e();u(o)}else f.$K2.$9(function(f){var o=e.$7hK(n,i,t,f.$9(),r);o.$3e();u(o)})})},$AQK:function(n,t,i,r,u){var f=this;this.$4ph.$9(function(e){if(f.$I.get_$U()!=="Mouse"){var o=e.$7gt(n,i,t,null,r);o.$3e();u(o)}else f.$K2.$9(function(f){var o=e.$7gt(n,i,t,f.$9(),r);o.$3e();u(o)})})}};_pcf.$IY=function(n,t,i,r,u,f){this.$$d_$7hY=Function.createDelegate(this,this.$7hY);this.$$d_$DrT=Function.createDelegate(this,this.$DrT);this.$$d_$Dwi=Function.createDelegate(this,this.$Dwi);this.$$d_$5EI=Function.createDelegate(this,this.$5EI);this.$$d_$DfT=Function.createDelegate(this,this.$DfT);this.$$d_$DWs=Function.createDelegate(this,this.$DWs);this.$$d_$Dh3=Function.createDelegate(this,this.$Dh3);this.$$d_$DR2=Function.createDelegate(this,this.$DR2);this.$$d_$4rI=Function.createDelegate(this,this.$4rI);this.$$d_$4Xh=Function.createDelegate(this,this.$4Xh);this.$$d_$APJ=Function.createDelegate(this,this.$APJ);this.$$d_$API=Function.createDelegate(this,this.$API);_pcf.$IY.initializeBase(this);this.$I=u;this.$1D=r;this.$y3=n;this.$3Uk=t;this.$10J=i;this.$13c=f;this.$6tJ=new _y.$AV};_pcf.$IY.prototype={$I:null,$1D:null,$10J:null,$6tJ:null,$13c:null,$2F:null,$Jw:null,$TD:null,$2Su:null,$4x1:!1,$4ui:!1,$3Uk:0,$y3:null,$c:null,$3JP:!1,add_$9G5:function(n){this.$32("PersonaCreated",n)},remove_$9G5:function(n){this.$5d("PersonaCreated",n)},add_$7dc:function(n){this.$32("ComposeCardChanged",n)},remove_$7dc:function(n){this.$5d("ComposeCardChanged",n)},add_$7Xd:function(n){this.$32("BeforeComposeCardCreate",n)},remove_$7Xd:function(n){this.$5d("BeforeComposeCardCreate",n)},add_$2tk:function(n){this.$32("ReadCardChanged",n)},remove_$2tk:function(n){this.$5d("ReadCardChanged",n)},add_$4Au:function(n){this.$32("ReadCardChanging",n)},remove_$4Au:function(n){this.$5d("ReadCardChanging",n)},add_$Eof:function(n){this.$32("TodosButtonClicked",n)},get_$IR:function(){this.$2F||(this.$2F=new _bc.$3e);return this.$2F},get_$DOm:function(){if(!this.$2Su){this.$2Su=new _js.$X;var n=!!this.$1D&&this.$1D.$2r("ModernGroups");var t=$C(_g.$O.get_$Q().get_$9N().get_$2kZ())||_g.$O.get_$Q().get_$9N().get_$2kZ();this.$2Su.$F(new _ff.$1l(new _C(this.$$d_$API,_pcf.$IY.$L),_nbs.NonBootStrings.l_CreateContactString_LowerCase_Text,n?_nbs.NonBootStrings.l_CreateContactDescription_Text:null));this.$I.get_$U()==="Mouse"&&this.$2Su.$F(new _ff.$1l(new _C(this.$$d_$APJ,_pcf.$IY.$L),n?_nbs.NonBootStrings.l_CreateContactListString_LowerCase_Text:_nbs.NonBootStrings.l_CreateGroupString_LowerCase_Text,n?_nbs.NonBootStrings.l_CreateContactListDescription_Text:null));n&&t&&this.$2Su.$F(new _ff.$1l(new _C(this.$$d_$4Xh,_pcf.$IY.$L),_nbs.NonBootStrings.l_CreateGroupString_LowerCase_Text,_nbs.NonBootStrings.l_CreateGroupDescription_Text));this.$2Su.$F(new _ff.$1l(new _C(this.$$d_$4rI,_pcf.$IY.$L),_bcs.BootCommonStrings.l_ConfirmDialog_Cancel_Text,null))}return this.$2Su},set_$6SA:function(n){if(this.$4x1!==n){this.$4x1=n;this.$4("IsNewDialogShown")}return n},get_$2mi:function(){return this.$3JP},set_$2mi:function(n){if(this.$3JP===n)return n;this.$3JP=n;this.$4("IsReadCardVisible");this.$Jw.set_$LT(this.$3JP);return n},get_$Tq:function(){return this.$Jw},set_$Tq:function(n){if(this.$Jw===n)return n;this.$6T("ReadCardChanging");if(this.$Jw){this.set_$2mi(!1);this.$Jw.remove_$7UG(this.$$d_$DR2);this.$Jw.remove_$49b(this.$$d_$Dh3);this.$Jw.get_$4Ay().remove_$7n0(this.$$d_$DWs);this.$Jw.rpcl("IsVisible",this.$$d_$DfT);this.$Jw.dispose()}this.$Jw=n;if(this.$Jw){this.$Jw.apcl("IsVisible",this.$$d_$DfT);this.$Jw.add_$7UG(this.$$d_$DR2);this.$Jw.add_$49b(this.$$d_$Dh3);this.$Jw.get_$4Ay().add_$7n0(this.$$d_$DWs)}this.$6T("ReadCardChanged");this.$3i("ReadCard","HideConductor");return n},get_$1QX:function(){return this.$TD},set_$1QX:function(n){if(this.$TD===n)return n;this.$6T("ComposeCardChanging");if(this.$TD){this.$TD.remove_$7n1(this.$$d_$5EI);this.$TD.rpcl("IsVisible",this.$$d_$DfT);this.$TD.dispose()}this.$TD=n;if(this.$TD){this.$TD.apcl("IsVisible",this.$$d_$DfT);this.$TD.add_$7n1(this.$$d_$5EI)}this.$6T("ComposeCardChanged");this.$4("ComposeCard");return n},get_$9mG:function(){return new _C(this.$$d_$Dwi,_a.$0.$QY)},$Xg:null,set_$10P:function(n){this.$Xg=n;return n},get_$2ap:function(){return this.$TD||this.$Jw},get_$CEK:function(){return _bc.$13v.isInstanceOfType(this.$I.$1L5().get_$8q())},$1OW:function(n){if(this.$Jw&&_pc.$q.$31w(this.$Jw.get_$3F(),n)){this.$7m3(!1);return}var i=_a.$6.acsa(_a.$0.$Fi,"CreatePersonaCardViewModel",!0);var t=this;this.$10J.$AQJ(n,null,null,this.$y3,this,function(n){t.$9Bi(n,!0,i)},this.$13c)},$34G:function(){this.set_$Tq(null)},$7hY:function(){this.$I.get_$U()==="Mouse"?this.set_$6SA(!0):this.$4VV(1)},$API:function(){this.$4rI();this.$4VV(1)},$APJ:function(){this.$4rI();this.$4VV(2)},$4Xh:function(){this.$4rI();if(!this.$4ui){this.$4ui=!0;this.$4VV(5)}},$9kq:function(n,t){this.$5tq(n,2,t)},$5kW:function(n){_a.$6.$1g(_a.$0.$Fi,"PersonCard.AddToContacts");this.$5tq(n,3,new _rpc.$4P(null,3))},$AZp:function(n,t){this.$4cA(_pc.$q.$Jf(n),t)},$4cA:function(n,t){switch(n.get_$21()){case 1:_a.$6.stPT(_a.$0.$Hd,"EditContact",3);_a.$6.$1g(_a.$0.$Hd,"EditContact");break;case 2:_a.$6.stPT(_a.$0.$Hd,"EditGroup",3);_a.$6.$1g(_a.$0.$Hd,"EditGroup");break;case 5:_a.$6.stPT(_a.$0.$Hd,"EditModernGroup",3);_a.$6.$1g(_a.$0.$Hd,"EditModernGroup");break;default:break}this.$5tq(n,1,t)},$1CD:function(n){var u=n.get_$LT()&&(n.get_$5j()===2||n.get_$5j()===3||n.get_$3F().get_$He()===3);if(u){var t=null;var i=null;var r=n.get_$3F().get_$21();switch(n.get_$5j()){case 2:switch(r){case 1:t="NewContact";i="NewContact";break;case 2:t="NewGroup";i="NewGroup";break;case 5:t="NewModernGroup";i="NewModernGroup";break}break;case 1:switch(r){case 1:t="EditContact";i="EditContact";break;case 2:t="EditGroup";i="EditGroup";break}break;case 0:t="OpenContact";i="OpenPersonCard_"+this.$I.get_$U();break;case 3:t="PersonCard.AddToContacts";break}t&&(t==="OpenContact"&&this.$y3.$27F?_a.$6.$1G(null,t,null,null,"OBE"):_a.$6.$1G(null,t));i&&_a.$6.endPT(i)}},$CJ5:function(n){this.$c=n;switch(this.$c.get_$5j()){case 3:this.$5kW(this.$c.get_$3F());break;case 1:this.$4cA(this.$c.get_$3F(),this.$Jw?this.$Jw.get_$4WD():new _rpc.$4P(null,1));break;case 2:var t=new _rpc.$4P(null,2);t.set_$3G(n.get_$3G());t.$y9=n.get_$5v3();this.$9kq(this.$c.get_$3F(),t);break;default:this.$1OW(this.$c.get_$3F());break}},$A0:function(){this.$TD&&this.$TD.get_$1Tr()?this.get_$IR().$RN(2,this.$TD.get_$3F().get_$21()===5?[_nbs.NonBootStrings.l_ModernGroupCardDirtyPopoutWarning_Text]:[_nbs.NonBootStrings.l_PersonaCardDirtyPopoutWarning_Text],this.$$d_$DrT,!1,_bcs.BootCommonStrings.l_Yes_Text,_bcs.BootCommonStrings.l_No_Text,_nbs.NonBootStrings.l_PopoutCardConfirmationPromptTile_Text):this.$9Fr()},$2A:function(){this.set_$1QX(null);this.set_$Tq(null);_a.$1ad.prototype.$2A.call(this)},$9Fr:function(){var t=_a.$6.$1g(_a.$0.$Fi,"PersonCard.Popout",!0);if(this.$I.get_$U()!=="Mouse")throw Error.invalidOperation("Persona/Group Card can only be popped out in MUI");var n=this.$7g6();if(this.get_$2ap().get_$5j()){this.$TD.set_$1Tr(!1);this.$TD.get_$eS().$11()}this.get_$2ap().$1y3();this.$I.$VL(_pcf.$Jb,null,null,_bc.$2I.get_$Fi(),n,!1);_a.$6.$1G(t);_pc.$4r.$jt(32,8,this.get_$2ap().get_$3F().get_$21())},$DR2:function(){this.$5kW(this.$Jw.get_$3F())},$DWs:function(){this.$4cA(this.$Jw.get_$3F(),this.$Jw.get_$4WD())},$5tq:function(n,t,i){var r;switch(t){case 3:r="AddPersonaCardViewModel";break;case 2:r="CreatePersonaCardViewModel";break;case 1:r="EditPersonaCardViewModel";break;default:throw Error.invalidOperation(_js.$9.$5K("Cannot call CreateAndShowComposeCardViewModel with mode not in (Add,Create,Edit). Actual value = {0}",t));}var e=_a.$6.acsa(_a.$0.$Fi,r,!0);var u=this.$y3;if(t===1||t===3){u=new _bc.$Eh;u.$CC=this.$y3.$CC}i.set_$5j(t);this.$AQ("BeforeComposeCardCreate",i);var f=this;this.$10J.$AM1(n,t,null,null,u,this,i,function(n){f.$DUT(n,i,e)})},$5EI:function(n){var t=this.$TD.get_$5j();if(n)if(n.get_$21()===1){_a.$6.$1G(null,"SaveContact");_a.$6.endPT("SavePersona_"+this.$I.get_$U())}else if(n.get_$21()===2){_a.$6.$1G(null,"SaveGroup");_a.$6.endPT("SaveGroup_"+this.$I.get_$U())}if(this.$TD.get_$h1()){this.$TD.set_$1Tr(!1);this.$TD.get_$h1()()}(t===3||t===1)&&n&&this.$Jw&&this.$Jw.$DfY(n);this.set_$1QX(null);t===2&&this.$AQ("PersonaCreated",n)},$DUT:function(n,t,i){_a.$6.acea(i);if(this.$c){this.$TD.$3vM(this.$c);this.$c=null}this.set_$1QX(n);this.$TD.$1Ti(t);if(this.$I.get_$Cp()||n.get_$5j()!==2){var r=_a.$6.acss(_a.$0.$Fi,"OwaShell.PopUp");this.$I.$Az(this.$TD);_a.$6.aces(r)}else this.$6tJ.$NT(this.$TD);(this.$TD.get_$5j()===3||this.$TD.get_$5j()===1)&&this.$1CD(this.$TD);this.$4ui=!1},$7g6:function(){var n=new _rpc.$4P(this.get_$2ap(),this.get_$2ap().get_$5j());if(this.get_$2ap().get_$AF()){n.set_$50O(this.get_$2ap().get_$AF().get_$50O());n.set_$Wp(this.get_$2ap().get_$AF().get_$Wp())}if(this.$TD){n.set_$3G(this.$TD.get_$3G());n.set_$5v3(this.$TD.get_$5v8())}else n.set_$Gq(this.$Jw.get_$Gq());n.set_$1oG(!0);n.set_$lx(!1);return n},$DrT:function(n,t){n&&this.$9Fr()},$DfT:function(n,t){if(_rpc.$2G.isInstanceOfType(n)){var i=n;i.$Dh&&this.$1CD(i)}},$Dh3:function(){this.$1CD(this.$Jw)},$9Bi:function(n,t,i){_a.$6.acea(i);var r=!1;if(this.$c){r=!0;n.$3vM(this.$c);this.$c=null}this.set_$Tq(n);t&&this.$7m3(r)},$7m3:function(n){if(this.$3Uk===3)if(n)this.set_$2mi(!0);else{this.$Jw.get_$4Ay().set_$23h(!0);this.$Jw.$9Gw()}else if(this.$3Uk)if(this.$3Uk===1&&this.get_$CEK()){var i=_a.$6.acss(_a.$0.$Fi,"OwaShell.PopUp");this.$I.$j2(this.$Jw,1,!1);_a.$6.aces(i)}else{var t=_a.$6.acss(_a.$0.$Fi,"OwaShell.PopUp");this.$I.$Az(this.$Jw);_a.$6.aces(t)}else this.set_$2mi(!0)},$Dwi:function(){this.$6T("TodosButtonClicked")},$4rI:function(){this.set_$6SA(!1)},$4VV:function(n){var i="";n===1?i="NewContact":n===2?i="NewGroup":n===5&&(i="NewModernGroup");_a.$6.stPT(_a.$0.$Hd,i,3);_a.$6.$1g(_a.$0.$Hd,i);var t=_pc.$q.$5vj();t.set_$21(n);t.$Xg=this.$Xg;if(n===2){t.set_$2Z(new _g.$1K);t.get_$2Z().RoutingType="MAPIPDL"}this.$9kq(t,new _rpc.$4P(null,2))}};_pcf.$Ms=function(n){_pcf.$Ms.initializeBase(this,[n]);this.set_$6("PersonaCardFacadeView")};_pcf.$Ms.prototype={$2tl:null,get_$10H:function(){return this.get_$k()},$4T:function(){_js.$7.prototype.$4T.call(this);this.$2tl=this.$u.$1N("PersonaCardView")}};_pcf.$oQ=function(n){_pcf.$oQ.initializeBase(this,[n])};_pcf.$oQ.prototype={$2UW:null,$4T:function(){_js.$7.prototype.$4T.call(this);this.$2UW=this.$u.$1N("PersonaCardFacadeView")}};_pcf.$oR=function(n,t,i,r){_pcf.$oR.initializeBase(this,[n,t,i,r,"PersonaCardView"])};_pcf.$1NT=function(){};_pcf.$1NT.prototype={$4L:function(n,t){var i=n;switch(i){case 2:return"ReadGroupCardView";case 4:return"ReadLocationCardView";case 5:return"ReadModernGroupCardView";default:return"ReadPersonaCardView"}},$7en:function(n,t){throw Error.notImplemented();}};_pcf._TI=function(){};_pcf._TI.$$cctor=function(){var t="PersonaCardFacadeView";new _A(t,function(){_pcf._TI.$1[t]===undefined&&(_pcf._TI.$1[t]=[[[-1,0,["MessageBoxViewModel"],[_pcf._TI.$Crg],null,"DataContext",null,_pcf._TI.$Z,1,null,null,null]],[[-1,4,null,null,null,"DialogTitle",null,_pcf._TI.$FV,0,null,null,null,_nbs.NonBootStrings.l_NewPeopleHubDialogTitleString_LowerCase_Text],[-1,0,["NewDialogButtons"],[_pcf._TI.$Crh],null,"ButtonDataList",null,_pcf._TI.$FU,1,null,null,null],[-1,0,["IsNewDialogShown"],[_pcf._TI.$Cre],_pcf._TI.$Cri,"IsShown",_pcf._TI.$4w,_pcf._TI.$4g,2,null,null,!1]],[[-1,1,["PersonaCardFacadeViewModel","IsReadCardVisible"],[_pcf._TI.$Cvg,_pcf._TI.$Crf],null,"IsHidden",null,_pcf._TI.$8,1,_pcf._TI.get_$K(),null,!0],[-1,0,["ReadCard"],[_pcf._TI.$1em],null,"DataContext",null,_pcf._TI.$Z,1,null,null,null],[0,0,["TypeOfPersona"],[_pcf._TI.$DEa],null,"TemplateId",null,_pcf._TI.$Di,1,_pcf._TI.get_$CvL(),null,null]]]);var n=_pcf._TI._hf.childNodes[0].cloneNode(!0);var i=new _pcf.$oR(n.children[2],_js.$2.Instance.$2(_b.$1U),_js.$2.Instance.$2(_y.$W),_js.$2.Instance.$2(_a.$1x));i.set_$g(-1);var u=new _b.$5L(n.children[1],_js.$2.Instance.$2(_y.$W),_js.$2.Instance.$2(_fc.$l),_js.$2.Instance.$2(_ff.$M),_js.$2.Instance.$2(_ff.$J));var r=new _js.$7(n.children[0]);r.set_$6("MessageBoxDefaultView");return new _B(n,[r,u,i]).R({PersonaCardView:i})},_pcf.$IY,_pcf.$Ms,!0,!1,!1,0,_pcf._TI.$1);var n="PersonaCardView";new _A(n,function(){_pcf._TI.$1[n]===undefined&&(_pcf._TI.$1[n]=[[[-1,0,["MessageBoxViewModel"],[_pcf._TI.$5AB],null,"DataContext",null,_pcf._TI.$Z,1,null,null,null]]]);var i=_pcf._TI._hf.childNodes[1].cloneNode(!0);var t=new _js.$7(i.children[0]);t.set_$6("MessageBoxDefaultView");return new _B(i,[t])},_bc.$13v,_pcf.$oR,!0,!1,!1,0,_pcf._TI.$1)};_pcf._TI.$9S=function(){var n=window.document.createElement("DIV");n.innerHTML='<div> <div></div> <div autoid="_pcf_0"></div> <div></div> </div><div> <div></div> </div>';_js.$F.get_$9G().appendChild(n);return n};_pcf._TI.$Crg=function(n){return n.get_$IR()};_pcf._TI.$Crh=function(n){return n.get_$DOm()};_pcf._TI.$Cre=function(n){return n.$4x1};_pcf._TI.$4w=function(n){return n.get_$1C()};_pcf._TI.$1em=function(n){return n.$Jw};_pcf._TI.$DEa=function(n){return n.get_$5e2()};_pcf._TI.$Cvg=function(n){return n.get_$10H()};_pcf._TI.$Crf=function(n){return n.$3JP};_pcf._TI.$5AB=function(n){return n.get_$IR()};_pcf._TI.$Z=function(n,t){n.set_$k(t)};_pcf._TI.$FV=function(n,t){n.set_$ID(t)};_pcf._TI.$FU=function(n,t){n.set_$IA(t)};_pcf._TI.$Cri=function(n,t){n.set_$6SA(t)};_pcf._TI.$4g=function(n,t){n.set_$1C(t)};_pcf._TI.$Di=function(n,t){n.set_$6(t)};_pcf._TI.$8=function(n,t){n.set_$17(t)};_pcf._TI.get_$CvL=function(){_pcf._TI.$4NJ||(_pcf._TI.$4NJ=new _pcf.$1NT);return _pcf._TI.$4NJ};_pcf._TI.get_$K=function(){_pcf._TI.$2L||(_pcf._TI.$2L=new _fc.$42);return _pcf._TI.$2L};PersonaCardFacadeComponent.registerClass("PersonaCardFacadeComponent",null,_a.$1X7);_pcf.$Jb.registerClass("_pcf.$Jb",null,_bc.$1Jj,IPersonaCardFacadeViewModelFactory);_pcf.$oS.registerClass("_pcf.$oS",null,IPersonaCardViewModelFactory);_pcf.$IY.registerClass("_pcf.$IY",_a.$En,_bc.$1UN,IModernGroupCardFacade,_y.$1YJ);_pcf.$Ms.registerClass("_pcf.$Ms",_js.$7);_pcf.$oQ.registerClass("_pcf.$oQ",_js.$7);_pcf.$oR.registerClass("_pcf.$oR",_pc.$1bc);_pcf.$1NT.registerClass("_pcf.$1NT",null,_js.$1KJ);_pcf._TI.registerClass("_pcf._TI");_pcf.$IY.$L=_a.$0.$Fi;_pcf._TI._hf=_pcf._TI.$9S();_pcf._TI.$4NJ=null;_pcf._TI.$2L=null;_pcf._TI.$1={};_pcf._TI.$$cctor();
window.scriptsLoaded['microsoft.exchange.clients.owa2.client.core.personacardfacade.js'] = 1; window.scriptProcessEnd = window.scriptProcessEnd || {}; window.scriptProcessEnd['microsoft.exchange.clients.owa2.client.core.personacardfacade.js'] = (new Date()).getTime(); } catch(e) { window.owaLastErrorReported = e; throw e; }