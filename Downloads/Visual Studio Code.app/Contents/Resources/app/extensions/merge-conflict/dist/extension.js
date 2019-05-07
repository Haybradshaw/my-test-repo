!function(e,t){for(var n in t)e[n]=t[n]}(exports,function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t){e.exports=require("vscode")},function(e,t){e.exports=require("path")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o,i,s,a,c=n(1),l=n(11),u=Object.prototype.toString;function d(e){return void 0!==e}function g(e){return"[object String]"===u.call(e)}function h(e){return JSON.parse(l.readFileSync(e,"utf8"))}function f(e,t){return a&&(e="［"+e.replace(/[aouei]/g,"$&$&")+"］"),0===t.length?e:e.replace(/\{(\d+)\}/g,function(e,n){var r=n[0],o=t[r],i=e;return"string"==typeof o?i=o:"number"!=typeof o&&"boolean"!=typeof o&&void 0!==o&&null!==o||(i=String(o)),i})}function m(e){return function(t,n){for(var r=[],o=2;o<arguments.length;o++)r[o-2]=arguments[o];return function(e){return"[object Number]"===u.call(e)}(t)?t>=e.length?void console.error("Broken localize call found. Index out of bounds. Stacktrace is\n: "+new Error("").stack):f(e[t],r):g(n)?(console.warn("Message "+n+" didn't get externalized correctly."),f(n,r)):void console.error("Broken localize call found. Stacktrace is\n: "+new Error("").stack)}}function p(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return f(t,n)}function v(e,t){return i[e]=t,t}function w(e,t){var n,r=c.join(s.cacheRoot,e.id+"-"+e.hash+".json"),o=!1,i=!1;try{return n=JSON.parse(l.readFileSync(r,{encoding:"utf8",flag:"r"})),function(e){var t=new Date;l.utimes(e,t,t,function(){})}(r),n}catch(e){if("ENOENT"===e.code)i=!0;else{if(!(e instanceof SyntaxError))throw e;console.log("Syntax error parsing message bundle: "+e.message+"."),l.unlink(r,function(e){e&&console.error("Deleting corrupted bundle "+r+" failed.")}),o=!0}}if(!(n=function(e,t){var n=s.translationsConfig[e.id];if(n){var r=h(n).contents,o=h(c.join(t,"nls.metadata.json")),i=Object.create(null);for(var a in o){var l=o[a],u=r[e.outDir+"/"+a];if(u){for(var d=[],f=0;f<l.keys.length;f++){var m=l.keys[f],p=u[g(m)?m:m.key];void 0===p&&(p=l.messages[f]),d.push(p)}i[a]=d}else i[a]=l.messages}return i}}(e,t))||o)return n;if(i)try{l.writeFileSync(r,JSON.stringify(n),{encoding:"utf8",flag:"wx"})}catch(e){if("EEXIST"===e.code)return n;throw e}return n}function C(e){try{return function(e){var t=h(c.join(e,"nls.metadata.json")),n=Object.create(null);for(var r in t){var o=t[r];n[r]=o.messages}return n}(e)}catch(e){return void console.log("Generating default bundle from meta data failed.",e)}}function y(e,t){var n;if(!0===s.languagePackSupport&&void 0!==s.cacheRoot&&void 0!==s.languagePackId&&void 0!==s.translationsConfigFile&&void 0!==s.translationsConfig)try{n=w(e,t)}catch(e){console.log("Load or create bundle failed ",e)}if(!n){if(s.languagePackSupport)return C(t);var r=function(e){for(var t=s.locale;t;){var n=c.join(e,"nls.bundle."+t+".json");if(l.existsSync(n))return n;var r=t.lastIndexOf("-");t=r>0?t.substring(0,r):void 0}if(void 0===t&&(n=c.join(e,"nls.bundle.json"),l.existsSync(n)))return n}(t);if(r)try{return h(r)}catch(e){console.log("Loading in the box message bundle failed.",e)}n=C(t)}return n}function b(e){if(!e)return p;var t=c.extname(e);if(t&&(e=e.substr(0,e.length-t.length)),s.messageFormat===r.both||s.messageFormat===r.bundle){var n=function(e){for(var t,n=c.dirname(e);t=c.join(n,"nls.metadata.header.json"),!l.existsSync(t);){var r=c.dirname(n);if(r===n){t=void 0;break}n=r}return t}(e);if(n){var o=c.dirname(n),u=i[o];if(void 0===u)try{var g=JSON.parse(l.readFileSync(n,"utf8"));try{var f=y(g,o);u=v(o,f?{header:g,nlsBundle:f}:null)}catch(e){console.error("Failed to load nls bundle",e),u=v(o,null)}}catch(e){console.error("Failed to read header file",e),u=v(o,null)}if(u){var w=e.substr(o.length+1).replace(/\\/g,"/"),C=u.nlsBundle[w];return void 0===C?(console.error("Messages for file "+e+" not found. See console for details."),function(){return"Messages not found."}):m(C)}}}if(s.messageFormat===r.both||s.messageFormat===r.file)try{var b=h(function(e){var t;if(s.cacheLanguageResolution&&t)t=t;else{if(a||!s.locale)t=".nls.json";else for(var n=s.locale;n;){var r=".nls."+n+".json";if(l.existsSync(e+r)){t=r;break}var o=n.lastIndexOf("-");o>0?n=n.substring(0,o):(t=".nls.json",n=null)}s.cacheLanguageResolution&&(t=t)}return e+t}(e));return Array.isArray(b)?m(b):d(b.messages)&&d(b.keys)?m(b.messages):(console.error("String bundle '"+e+"' uses an unsupported format."),function(){return"File bundle has unsupported format. See console for details"})}catch(e){"ENOENT"!==e.code&&console.error("Failed to load single file bundle",e)}return console.error("Failed to load message bundle for file "+e),function(){return"Failed to load message bundle. See console for details."}}!function(e){e.file="file",e.bundle="bundle",e.both="both"}(r=t.MessageFormat||(t.MessageFormat={})),function(e){e.is=function(e){var t=e;return t&&d(t.key)&&d(t.comment)}}(o||(o={})),function(){if(s={locale:void 0,languagePackSupport:!1,cacheLanguageResolution:!0,messageFormat:r.bundle},g(process.env.VSCODE_NLS_CONFIG))try{var e=JSON.parse(process.env.VSCODE_NLS_CONFIG);if(g(e.locale)&&(s.locale=e.locale.toLowerCase()),function(e){return!0===e||!1===e}(e._languagePackSupport)&&(s.languagePackSupport=e._languagePackSupport),g(e._cacheRoot)&&(s.cacheRoot=e._cacheRoot),g(e._languagePackId)&&(s.languagePackId=e._languagePackId),g(e._translationsConfigFile)){s.translationsConfigFile=e._translationsConfigFile;try{s.translationsConfig=h(s.translationsConfigFile)}catch(t){e._corruptedFile&&l.writeFile(e._corruptedFile,"corrupted","utf8",function(e){console.error(e)})}}}catch(e){}a="pseudo"===s.locale,void 0,i=Object.create(null)}(),t.loadMessageBundle=b,t.config=function(e){return e&&(g(e.locale)&&(s.locale=e.locale.toLowerCase(),void 0,i=Object.create(null)),void 0!==e.messageFormat&&(s.messageFormat=e.messageFormat)),a="pseudo"===s.locale,b}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0);class o{constructor(e){this.context=e}begin(){this.context.subscriptions.push(r.workspace.registerTextDocumentContentProvider(o.scheme,this))}dispose(){}async provideTextDocumentContent(e){try{const{scheme:t,range:n}=JSON.parse(e.query),[o,i]=n;return(await r.workspace.openTextDocument(e.with({scheme:t,query:""}))).getText(new r.Range(o.line,o.character,i.line,i.character))}catch(e){return await r.window.showErrorMessage("Unable to show comparison"),null}}}o.scheme="merge-conflict.conflict-diff",t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(5);t.activate=function(e){const t=new r.default(e);t.begin(),e.subscriptions.push(t)},t.deactivate=function(){}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0),o=n(6),i=n(10),s=n(12),a=n(3),c=n(13),l="merge-conflict";t.default=class{constructor(e){this.context=e,this.services=[]}begin(){let e=this.createExtensionConfiguration();const t=new o.default;this.services.push(t,new s.default(t),new i.default(t),new a.default(this.context),new c.default(this.context,t)),this.services.forEach(t=>{t.begin&&t.begin instanceof Function&&t.begin(e)}),r.workspace.onDidChangeConfiguration(()=>{this.services.forEach(e=>{e.configurationUpdated&&e.configurationUpdated instanceof Function&&e.configurationUpdated(this.createExtensionConfiguration())})})}createExtensionConfiguration(){const e=r.workspace.getConfiguration(l),t=e.get("codeLens.enabled",!0),n=e.get("decorators.enabled",!0);return{enableCodeLens:t,enableDecorations:n,enableEditorOverview:n}}dispose(){this.services.forEach(e=>e.dispose()),this.services=[]}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(7),o=n(9);class i{constructor(e,t){this.origins=new Set,this.origins.add(t),this.delayTask=new o.Delayer(e)}addOrigin(e){return this.origins.has(e),!1}hasOrigin(e){return this.origins.has(e)}}class s{constructor(e,t){this.parent=e,this.origin=t}getConflicts(e){return this.parent.getConflicts(e,this.origin)}isPending(e){return this.parent.isPending(e,this.origin)}forget(e){this.parent.forget(e)}}t.default=class{constructor(){this.cache=new Map,this.delayExpireTime=250}getConflicts(e,t){let n=this.getCacheKey(e);if(!n)return Promise.resolve(this.getConflictsOrEmpty(e,[t]));let r=this.cache.get(n);return r?r.addOrigin(t):(r=new i(this.delayExpireTime,t),this.cache.set(n,r)),r.delayTask.trigger(()=>{let t=this.getConflictsOrEmpty(e,Array.from(r.origins));return this.cache&&this.cache.delete(n),t})}isPending(e,t){if(!e)return!1;let n=this.getCacheKey(e);if(!n)return!1;const r=this.cache.get(n);return!!r&&r.hasOrigin(t)}createTracker(e){return new s(this,e)}forget(e){let t=this.getCacheKey(e);t&&this.cache.delete(t)}dispose(){this.cache.clear()}getConflictsOrEmpty(e,t){return r.MergeConflictParser.containsConflict(e)?r.MergeConflictParser.scanDocument(e):[]}getCacheKey(e){return e.uri?e.uri.toString():null}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0),o=n(8),i="<<<<<<<",s="|||||||",a="=======",c=">>>>>>>";class l{static scanDocument(e){let t=null;const n=[];for(let r=0;r<e.lineCount;r++){const o=e.lineAt(r);if(o&&!o.isEmptyOrWhitespace)if(o.text.startsWith(i)){if(null!==t){t=null;break}t={startHeader:o,commonAncestors:[]}}else if(t&&!t.splitter&&o.text.startsWith(s))t.commonAncestors.push(o);else if(t&&!t.splitter&&o.text.startsWith(a))t.splitter=o;else if(t&&o.text.startsWith(c)){t.endFooter=o;let r=l.scanItemTolMergeConflictDescriptor(e,t);null!==r&&n.push(r),t=null}}return n.filter(Boolean).map(e=>new o.DocumentMergeConflict(e))}static scanItemTolMergeConflictDescriptor(e,t){if(!t.startHeader||!t.splitter||!t.endFooter)return null;let n=t.commonAncestors[0]||t.splitter;return{current:{header:t.startHeader.range,decoratorContent:new r.Range(t.startHeader.rangeIncludingLineBreak.end,l.shiftBackOneCharacter(e,n.range.start,t.startHeader.rangeIncludingLineBreak.end)),content:new r.Range(t.startHeader.rangeIncludingLineBreak.end,n.range.start),name:t.startHeader.text.substring(i.length+1)},commonAncestors:t.commonAncestors.map((n,o,i)=>{let a=i[o+1]||t.splitter;return{header:n.range,decoratorContent:new r.Range(n.rangeIncludingLineBreak.end,l.shiftBackOneCharacter(e,a.range.start,n.rangeIncludingLineBreak.end)),content:new r.Range(n.rangeIncludingLineBreak.end,a.range.start),name:n.text.substring(s.length+1)}}),splitter:t.splitter.range,incoming:{header:t.endFooter.range,decoratorContent:new r.Range(t.splitter.rangeIncludingLineBreak.end,l.shiftBackOneCharacter(e,t.endFooter.range.start,t.splitter.rangeIncludingLineBreak.end)),content:new r.Range(t.splitter.rangeIncludingLineBreak.end,t.endFooter.range.start),name:t.endFooter.text.substring(c.length+1)},range:new r.Range(t.startHeader.range.start,t.endFooter.rangeIncludingLineBreak.end)}}static containsConflict(e){if(!e)return!1;let t=e.getText();return t.includes(i)&&t.includes(c)}static shiftBackOneCharacter(e,t,n){if(t.isEqual(n))return t;let o=t.line,i=t.character-1;return i<0&&(o--,i=e.lineAt(o).range.end.character),new r.Position(o,i)}}t.MergeConflictParser=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.DocumentMergeConflict=class{constructor(e){this.range=e.range,this.current=e.current,this.incoming=e.incoming,this.commonAncestors=e.commonAncestors,this.splitter=e.splitter}commitEdit(e,t,n){return n?(this.applyEdit(e,t,n),Promise.resolve(!0)):t.edit(n=>this.applyEdit(e,t,n))}applyEdit(e,t,n){if(0===e){let e=t.document.getText(this.current.content);this.replaceRangeWithContent(e,n)}else if(1===e){let e=t.document.getText(this.incoming.content);this.replaceRangeWithContent(e,n)}else if(2===e){const e=t.document.getText(this.current.content),r=t.document.getText(this.incoming.content);n.replace(this.range,e.concat(r))}}replaceRangeWithContent(e,t){this.isNewlineOnly(e)?t.replace(this.range,""):t.replace(this.range,e)}isNewlineOnly(e){return"\n"===e||"\r\n"===e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.Delayer=class{constructor(e){this.defaultDelay=e,this.timeout=null,this.completionPromise=null,this.onSuccess=null,this.task=null}trigger(e,t=this.defaultDelay){return this.task=e,t>=0&&this.cancelTimeout(),this.completionPromise||(this.completionPromise=new Promise(e=>{this.onSuccess=e}).then(()=>{this.completionPromise=null,this.onSuccess=null;let e=this.task();return this.task=null,e})),(t>=0||null===this.timeout)&&(this.timeout=setTimeout(()=>{this.timeout=null,this.onSuccess(void 0)},t>=0?t:this.defaultDelay)),this.completionPromise}forceDelivery(){if(!this.completionPromise)return null;this.cancelTimeout();let e=this.completionPromise;return this.onSuccess(void 0),e}isTriggered(){return null!==this.timeout}cancel(){this.cancelTimeout(),this.completionPromise=null}cancelTimeout(){null!==this.timeout&&(clearTimeout(this.timeout),this.timeout=null)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0),o=n(2).loadMessageBundle(n(1).join(__dirname,"codelensProvider.ts"));t.default=class{constructor(e){this.tracker=e.createTracker("codelens")}begin(e){this.config=e,this.config.enableCodeLens&&this.registerCodeLensProvider()}configurationUpdated(e){!1===e.enableCodeLens&&this.codeLensRegistrationHandle?(this.codeLensRegistrationHandle.dispose(),this.codeLensRegistrationHandle=null):!0!==e.enableCodeLens||this.codeLensRegistrationHandle||this.registerCodeLensProvider(),this.config=e}dispose(){this.codeLensRegistrationHandle&&(this.codeLensRegistrationHandle.dispose(),this.codeLensRegistrationHandle=null)}async provideCodeLenses(e,t){if(!this.config||!this.config.enableCodeLens)return null;let n=await this.tracker.getConflicts(e);if(!n||0===n.length)return null;let i=[];return n.forEach(e=>{let t={command:"merge-conflict.accept.current",title:o(0,null),arguments:["known-conflict",e]},n={command:"merge-conflict.accept.incoming",title:o(1,null),arguments:["known-conflict",e]},s={command:"merge-conflict.accept.both",title:o(2,null),arguments:["known-conflict",e]},a={command:"merge-conflict.compare",title:o(3,null),arguments:[e]};i.push(new r.CodeLens(e.range,t),new r.CodeLens(e.range.with(e.range.start.with({character:e.range.start.character+1})),n),new r.CodeLens(e.range.with(e.range.start.with({character:e.range.start.character+2})),s),new r.CodeLens(e.range.with(e.range.start.with({character:e.range.start.character+3})),a))}),i}registerCodeLensProvider(){this.codeLensRegistrationHandle=r.languages.registerCodeLensProvider([{scheme:"file"},{scheme:"untitled"}],this)}}},function(e,t){e.exports=require("fs")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0),o=n(3),i=n(1),s=n(2).loadMessageBundle(n(1).join(__dirname,"commandHandler.ts"));var a;!function(e){e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards"}(a||(a={}));t.default=class{constructor(e){this.disposables=[],this.tracker=e.createTracker("commands")}begin(){this.disposables.push(this.registerTextEditorCommand("merge-conflict.accept.current",this.acceptCurrent),this.registerTextEditorCommand("merge-conflict.accept.incoming",this.acceptIncoming),this.registerTextEditorCommand("merge-conflict.accept.selection",this.acceptSelection),this.registerTextEditorCommand("merge-conflict.accept.both",this.acceptBoth),this.registerTextEditorCommand("merge-conflict.accept.all-current",this.acceptAllCurrent),this.registerTextEditorCommand("merge-conflict.accept.all-incoming",this.acceptAllIncoming),this.registerTextEditorCommand("merge-conflict.accept.all-both",this.acceptAllBoth),this.registerTextEditorCommand("merge-conflict.next",this.navigateNext),this.registerTextEditorCommand("merge-conflict.previous",this.navigatePrevious),this.registerTextEditorCommand("merge-conflict.compare",this.compare))}registerTextEditorCommand(e,t){return r.commands.registerCommand(e,(...e)=>{const n=r.window.activeTextEditor;return n&&t.call(this,n,...e)})}acceptCurrent(e,...t){return this.accept(0,e,...t)}acceptIncoming(e,...t){return this.accept(1,e,...t)}acceptBoth(e,...t){return this.accept(2,e,...t)}acceptAllCurrent(e){return this.acceptAll(0,e)}acceptAllIncoming(e){return this.acceptAll(1,e)}acceptAllBoth(e){return this.acceptAll(2,e)}async compare(e,t){const n=i.basename(e.document.uri.fsPath);if(!t&&!(t=await this.findConflictContainingSelection(e)))return void r.window.showWarningMessage(s(0,null));const a=e.document.uri.scheme;let c=t.current.content;const l=e.document.uri.with({scheme:o.default.scheme,query:JSON.stringify({scheme:a,range:c})});c=t.incoming.content;const u=l.with({query:JSON.stringify({scheme:a,range:c})}),d=s(1,null,n);r.commands.executeCommand("vscode.diff",l,u,d)}navigateNext(e){return this.navigate(e,a.Forwards)}navigatePrevious(e){return this.navigate(e,a.Backwards)}async acceptSelection(e){let t,n=await this.findConflictContainingSelection(e);if(!n)return void r.window.showWarningMessage(s(2,null));let o=n.splitter;if(n.commonAncestors.length>0&&(o=n.commonAncestors[0].header),e.selection.active.isBefore(o.start))t=0;else{if(!e.selection.active.isAfter(n.splitter.end))return e.selection.active.isBefore(n.splitter.start)?void r.window.showWarningMessage(s(3,null)):void r.window.showWarningMessage(s(4,null));t=1}this.tracker.forget(e.document),n.commitEdit(t,e)}dispose(){this.disposables.forEach(e=>e.dispose()),this.disposables=[]}async navigate(e,t){let n=await this.findConflictForNavigation(e,t);if(n)n.canNavigate?n.conflict&&(e.selection=new r.Selection(n.conflict.range.start,n.conflict.range.start),e.revealRange(n.conflict.range,r.TextEditorRevealType.Default)):r.window.showWarningMessage(s(6,null));else{if(r.workspace.getConfiguration("merge-conflict").get("autoNavigateNextConflict.enabled"))return;r.window.showWarningMessage(s(5,null))}}async accept(e,t,...n){let o;(o="known-conflict"===n[0]?n[1]:await this.findConflictContainingSelection(t))?(this.tracker.forget(t.document),o.commitEdit(e,t),r.workspace.getConfiguration("merge-conflict").get("autoNavigateNextConflict.enabled")&&this.navigateNext(t)):r.window.showWarningMessage(s(7,null))}async acceptAll(e,t){let n=await this.tracker.getConflicts(t.document);n&&0!==n.length?(this.tracker.forget(t.document),await t.edit(r=>n.forEach(n=>{n.applyEdit(e,t,r)}))):r.window.showWarningMessage(s(8,null))}async findConflictContainingSelection(e,t){if(t||(t=await this.tracker.getConflicts(e.document)),!t||0===t.length)return null;for(const n of t)if(n.range.contains(e.selection.active))return n;return null}async findConflictForNavigation(e,t,n){if(n||(n=await this.tracker.getConflicts(e.document)),!n||0===n.length)return null;let r,o,i=e.selection.active;if(1===n.length)return n[0].range.contains(i)?{canNavigate:!1}:{canNavigate:!0,conflict:n[0]};if(t===a.Forwards)r=(e=>i.isBefore(e.range.start)),o=(()=>n[0]);else{if(t!==a.Backwards)throw new Error(`Unsupported direction ${t}`);r=(e=>i.isAfter(e.range.start)),o=(()=>n[n.length-1])}for(const e of n)if(r(e)&&!e.range.contains(i))return{canNavigate:!0,conflict:e};return{canNavigate:!0,conflict:o()}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0),o=n(2).loadMessageBundle(n(1).join(__dirname,"mergeDecorator.ts"));t.default=class{constructor(e,t){this.context=e,this.decorations={},this.decorationUsesWholeLine=!0,this.updating=new Map,this.tracker=t.createTracker("decorator")}begin(e){this.config=e,this.registerDecorationTypes(e),r.window.visibleTextEditors.forEach(e=>this.applyDecorations(e)),r.workspace.onDidOpenTextDocument(e=>{this.applyDecorationsFromEvent(e)},null,this.context.subscriptions),r.workspace.onDidChangeTextDocument(e=>{this.applyDecorationsFromEvent(e.document)},null,this.context.subscriptions),r.window.onDidChangeVisibleTextEditors(e=>{e.forEach(e=>this.applyDecorations(e))},null,this.context.subscriptions)}configurationUpdated(e){this.config=e,this.registerDecorationTypes(e),r.window.visibleTextEditors.forEach(e=>{this.removeDecorations(e),this.applyDecorations(e)})}registerDecorationTypes(e){Object.keys(this.decorations).forEach(e=>this.decorations[e].dispose()),this.decorations={},e.enableDecorations&&e.enableEditorOverview&&((e.enableDecorations||e.enableEditorOverview)&&(this.decorations["current.content"]=r.window.createTextEditorDecorationType(this.generateBlockRenderOptions("merge.currentContentBackground","editorOverviewRuler.currentContentForeground",e)),this.decorations["incoming.content"]=r.window.createTextEditorDecorationType(this.generateBlockRenderOptions("merge.incomingContentBackground","editorOverviewRuler.incomingContentForeground",e)),this.decorations["commonAncestors.content"]=r.window.createTextEditorDecorationType(this.generateBlockRenderOptions("merge.commonContentBackground","editorOverviewRuler.commonContentForeground",e))),e.enableDecorations&&(this.decorations["current.header"]=r.window.createTextEditorDecorationType({isWholeLine:this.decorationUsesWholeLine,backgroundColor:new r.ThemeColor("merge.currentHeaderBackground"),color:new r.ThemeColor("editor.foreground"),outlineStyle:"solid",outlineWidth:"1pt",outlineColor:new r.ThemeColor("merge.border"),after:{contentText:" "+o(0,null),color:new r.ThemeColor("descriptionForeground")}}),this.decorations["commonAncestors.header"]=r.window.createTextEditorDecorationType({isWholeLine:this.decorationUsesWholeLine,backgroundColor:new r.ThemeColor("merge.commonHeaderBackground"),color:new r.ThemeColor("editor.foreground"),outlineStyle:"solid",outlineWidth:"1pt",outlineColor:new r.ThemeColor("merge.border")}),this.decorations.splitter=r.window.createTextEditorDecorationType({color:new r.ThemeColor("editor.foreground"),outlineStyle:"solid",outlineWidth:"1pt",outlineColor:new r.ThemeColor("merge.border"),isWholeLine:this.decorationUsesWholeLine}),this.decorations["incoming.header"]=r.window.createTextEditorDecorationType({backgroundColor:new r.ThemeColor("merge.incomingHeaderBackground"),color:new r.ThemeColor("editor.foreground"),outlineStyle:"solid",outlineWidth:"1pt",outlineColor:new r.ThemeColor("merge.border"),isWholeLine:this.decorationUsesWholeLine,after:{contentText:" "+o(1,null),color:new r.ThemeColor("descriptionForeground")}})))}dispose(){Object.keys(this.decorations).forEach(e=>{this.decorations[e].dispose()}),this.decorations={}}generateBlockRenderOptions(e,t,n){let o={};return n.enableDecorations&&(o.backgroundColor=new r.ThemeColor(e),o.isWholeLine=this.decorationUsesWholeLine),n.enableEditorOverview&&(o.overviewRulerColor=new r.ThemeColor(t),o.overviewRulerLane=r.OverviewRulerLane.Full),o}applyDecorationsFromEvent(e){for(const t of r.window.visibleTextEditors)t.document===e&&this.applyDecorations(t)}async applyDecorations(e){if(e&&e.document&&this.config&&(this.config.enableDecorations||this.config.enableEditorOverview)&&!this.updating.get(e))try{this.updating.set(e,!0);let t=await this.tracker.getConflicts(e.document);if(-1===r.window.visibleTextEditors.indexOf(e))return;if(0===t.length)return void this.removeDecorations(e);let n={},o=(e,t)=>{n[e]=n[e]||[],n[e].push(t)};t.forEach(e=>{e.current.decoratorContent.isEmpty||o("current.content",e.current.decoratorContent),e.incoming.decoratorContent.isEmpty||o("incoming.content",e.incoming.decoratorContent),e.commonAncestors.forEach(e=>{e.decoratorContent.isEmpty||o("commonAncestors.content",e.decoratorContent)}),this.config.enableDecorations&&(o("current.header",e.current.header),o("splitter",e.splitter),o("incoming.header",e.incoming.header),e.commonAncestors.forEach(e=>{o("commonAncestors.header",e.header)}))}),Object.keys(n).forEach(t=>{let r=this.decorations[t];r&&e.setDecorations(r,n[t])})}finally{this.updating.delete(e)}}removeDecorations(e){Object.keys(this.decorations).forEach(t=>{let n=this.decorations[t];n&&e.setDecorations(n,[])})}}}]));
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/51b0b28134d51361cf996d2f0a1c698247aeabd8/extensions/merge-conflict/dist/extension.js.map