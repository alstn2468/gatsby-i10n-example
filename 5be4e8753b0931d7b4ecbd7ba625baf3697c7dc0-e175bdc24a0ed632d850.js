"use strict";(self.webpackChunkgatsby_l10n_example=self.webpackChunkgatsby_l10n_example||[]).push([[257],{4970:function(n,t,e){Object.defineProperty(t,"__esModule",{value:!0}),t.getApplicativeComposition=t.getApplicativeMonoid=void 0;var r=e(2397),u=e(2836),o=e(8820);t.getApplicativeMonoid=function(n){var t=r.getApplySemigroup(n);return function(e){return{concat:t(e).concat,empty:n.of(e.empty)}}},t.getApplicativeComposition=function(n,t){var e=o.getFunctorComposition(n,t).map,i=r.ap(n,t);return{map:e,of:function(e){return n.of(t.of(e))},ap:function(n,t){return u.pipe(n,i(t))}}}},2397:function(n,t,e){Object.defineProperty(t,"__esModule",{value:!0}),t.sequenceS=t.sequenceT=t.getApplySemigroup=t.apS=t.apSecond=t.apFirst=t.ap=void 0;var r=e(2836);function u(n,t,e){return function(r){for(var o=Array(e.length+1),i=0;i<e.length;i++)o[i]=e[i];return o[e.length]=r,0===t?n.apply(null,o):u(n,t-1,o)}}t.ap=function(n,t){return function(e){return function(r){return n.ap(n.map(r,(function(n){return function(e){return t.ap(n,e)}})),e)}}},t.apFirst=function(n){return function(t){return function(e){return n.ap(n.map(e,(function(n){return function(){return n}})),t)}}},t.apSecond=function(n){return function(t){return function(e){return n.ap(n.map(e,(function(){return function(n){return n}})),t)}}},t.apS=function(n){return function(t,e){return function(r){return n.ap(n.map(r,(function(n){return function(e){var r;return Object.assign({},n,((r={})[t]=e,r))}})),e)}}},t.getApplySemigroup=function(n){return function(t){return{concat:function(e,r){return n.ap(n.map(e,(function(n){return function(e){return t.concat(n,e)}})),r)}}}};var o={1:function(n){return[n]},2:function(n){return function(t){return[n,t]}},3:function(n){return function(t){return function(e){return[n,t,e]}}},4:function(n){return function(t){return function(e){return function(r){return[n,t,e,r]}}}},5:function(n){return function(t){return function(e){return function(r){return function(u){return[n,t,e,r,u]}}}}}};function i(n){return o.hasOwnProperty(n)||(o[n]=u(r.tuple,n-1,[])),o[n]}t.sequenceT=function(n){return function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];for(var r=t.length,u=i(r),o=n.map(t[0],u),c=1;c<r;c++)o=n.ap(o,t[c]);return o}},t.sequenceS=function(n){return function(t){for(var e=Object.keys(t),r=e.length,o=function(n){var t=n.length;switch(t){case 1:return function(t){var e;return(e={})[n[0]]=t,e};case 2:return function(t){return function(e){var r;return(r={})[n[0]]=t,r[n[1]]=e,r}};case 3:return function(t){return function(e){return function(r){var u;return(u={})[n[0]]=t,u[n[1]]=e,u[n[2]]=r,u}}};case 4:return function(t){return function(e){return function(r){return function(u){var o;return(o={})[n[0]]=t,o[n[1]]=e,o[n[2]]=r,o[n[3]]=u,o}}}};case 5:return function(t){return function(e){return function(r){return function(u){return function(o){var i;return(i={})[n[0]]=t,i[n[1]]=e,i[n[2]]=r,i[n[3]]=u,i[n[4]]=o,i}}}}};default:return u((function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];for(var u={},o=0;o<t;o++)u[n[o]]=e[o];return u}),t-1,[])}}(e),i=n.map(t[e[0]],o),c=1;c<r;c++)i=n.ap(i,t[e[c]]);return i}}},2627:function(n,t){Object.defineProperty(t,"__esModule",{value:!0}),t.bind=t.chainFirst=void 0,t.chainFirst=function(n){return function(t){return function(e){return n.chain(e,(function(e){return n.map(t(e),(function(){return e}))}))}}},t.bind=function(n){return function(t,e){return function(r){return n.chain(r,(function(r){return n.map(e(r),(function(n){var e;return Object.assign({},r,((e={})[t]=n,e))}))}))}}}},6446:function(n,t,e){Object.defineProperty(t,"__esModule",{value:!0}),t.eqDate=t.eqNumber=t.eqString=t.eqBoolean=t.eq=t.strictEqual=t.getStructEq=t.getTupleEq=t.Contravariant=t.getMonoid=t.getSemigroup=t.eqStrict=t.URI=t.contramap=t.tuple=t.struct=t.fromEquals=void 0;var r=e(2836);t.fromEquals=function(n){return{equals:function(t,e){return t===e||n(t,e)}}};t.struct=function(n){return t.fromEquals((function(t,e){for(var r in n)if(!n[r].equals(t[r],e[r]))return!1;return!0}))};t.tuple=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return t.fromEquals((function(t,e){return n.every((function(n,r){return n.equals(t[r],e[r])}))}))};t.contramap=function(n){return function(e){return t.fromEquals((function(t,r){return e.equals(n(t),n(r))}))}},t.URI="Eq",t.eqStrict={equals:function(n,t){return n===t}};var u={equals:function(){return!0}};t.getSemigroup=function(){return{concat:function(n,e){return t.fromEquals((function(t,r){return n.equals(t,r)&&e.equals(t,r)}))}}};t.getMonoid=function(){return{concat:t.getSemigroup().concat,empty:u}},t.Contravariant={URI:t.URI,contramap:function(n,e){return r.pipe(n,t.contramap(e))}},t.getTupleEq=t.tuple,t.getStructEq=t.struct,t.strictEqual=t.eqStrict.equals,t.eq=t.Contravariant,t.eqBoolean=t.eqStrict,t.eqString=t.eqStrict,t.eqNumber=t.eqStrict,t.eqDate={equals:function(n,t){return n.valueOf()===t.valueOf()}}},214:function(n,t,e){var r=this&&this.__createBinding||(Object.create?function(n,t,e,r){void 0===r&&(r=e),Object.defineProperty(n,r,{enumerable:!0,get:function(){return t[e]}})}:function(n,t,e,r){void 0===r&&(r=e),n[r]=t[e]}),u=this&&this.__setModuleDefault||(Object.create?function(n,t){Object.defineProperty(n,"default",{enumerable:!0,value:t})}:function(n,t){n.default=t}),o=this&&this.__importStar||function(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)"default"!==e&&Object.prototype.hasOwnProperty.call(n,e)&&r(t,n,e);return u(t,n),t};Object.defineProperty(t,"__esModule",{value:!0}),t.filterOrElse=t.chainEitherK=t.fromEitherK=t.chainOptionK=t.fromOptionK=t.fromPredicate=t.fromOption=void 0;var i=e(2836),c=o(e(8231));function a(n){return function(t){return function(e){return n.fromEither(c.isNone(e)?c.left(t()):c.right(e.value))}}}function f(n){var t=a(n);return function(n){var e=t(n);return function(n){return i.flow(n,e)}}}function p(n){return function(t){return i.flow(t,n.fromEither)}}t.fromOption=a,t.fromPredicate=function(n){return function(t,e){return function(r){return n.fromEither(t(r)?c.right(r):c.left(e(r)))}}},t.fromOptionK=f,t.chainOptionK=function(n,t){var e=f(n);return function(n){var r=e(n);return function(n){return function(e){return t.chain(e,r(n))}}}},t.fromEitherK=p,t.chainEitherK=function(n,t){var e=p(n);return function(n){return function(r){return t.chain(r,e(n))}}},t.filterOrElse=function(n,t){return function(e,r){return function(u){return t.chain(u,(function(t){return n.fromEither(e(t)?c.right(t):c.left(r(t)))}))}}}},8820:function(n,t,e){Object.defineProperty(t,"__esModule",{value:!0}),t.getFunctorComposition=t.bindTo=t.flap=t.map=void 0;var r=e(2836);function u(n,t){return function(e){return function(r){return n.map(r,(function(n){return t.map(n,e)}))}}}t.map=u,t.flap=function(n){return function(t){return function(e){return n.map(e,(function(n){return n(t)}))}}},t.bindTo=function(n){return function(t){return function(e){return n.map(e,(function(n){var e;return(e={})[t]=n,e}))}}},t.getFunctorComposition=function(n,t){var e=u(n,t);return{map:function(n,t){return r.pipe(n,e(t))}}}},660:function(n,t){Object.defineProperty(t,"__esModule",{value:!0}),t.concatAll=t.endo=t.filterSecond=t.filterFirst=t.reverse=void 0;t.reverse=function(n){return{concat:function(t,e){return n.concat(e,t)}}};t.filterFirst=function(n){return function(t){return{concat:function(e,r){return n(e)?t.concat(e,r):r}}}};t.filterSecond=function(n){return function(t){return{concat:function(e,r){return n(r)?t.concat(e,r):e}}}};t.endo=function(n){return function(t){return{concat:function(e,r){return t.concat(n(e),n(r))}}}};t.concatAll=function(n){return function(t){return function(e){return e.reduce((function(t,e){return n.concat(t,e)}),t)}}}},2822:function(n,t,e){var r=this&&this.__createBinding||(Object.create?function(n,t,e,r){void 0===r&&(r=e),Object.defineProperty(n,r,{enumerable:!0,get:function(){return t[e]}})}:function(n,t,e,r){void 0===r&&(r=e),n[r]=t[e]}),u=this&&this.__setModuleDefault||(Object.create?function(n,t){Object.defineProperty(n,"default",{enumerable:!0,value:t})}:function(n,t){n.default=t}),o=this&&this.__importStar||function(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)"default"!==e&&Object.prototype.hasOwnProperty.call(n,e)&&r(t,n,e);return u(t,n),t};Object.defineProperty(t,"__esModule",{value:!0}),t.fromEither=t.MonadThrow=t.throwError=t.Witherable=t.wilt=t.wither=t.Traversable=t.sequence=t.traverse=t.Filterable=t.partitionMap=t.partition=t.filterMap=t.filter=t.Compactable=t.separate=t.compact=t.Extend=t.extend=t.Alternative=t.guard=t.Zero=t.zero=t.Alt=t.alt=t.altW=t.Foldable=t.reduceRight=t.foldMap=t.reduce=t.Monad=t.Chain=t.chain=t.Applicative=t.Apply=t.ap=t.Pointed=t.of=t.Functor=t.map=t.getMonoid=t.getOrd=t.getEq=t.getShow=t.URI=t.getRight=t.getLeft=t.fromPredicate=t.some=t.none=void 0,t.getLastMonoid=t.getFirstMonoid=t.getApplyMonoid=t.getApplySemigroup=t.option=t.mapNullable=t.getRefinement=t.sequenceArray=t.traverseArray=t.traverseArrayWithIndex=t.traverseReadonlyArrayWithIndex=t.traverseReadonlyNonEmptyArrayWithIndex=t.ApT=t.apS=t.bind=t.bindTo=t.Do=t.exists=t.elem=t.toUndefined=t.toNullable=t.chainNullableK=t.fromNullableK=t.tryCatchK=t.tryCatch=t.fromNullable=t.chainEitherK=t.fromEitherK=t.duplicate=t.chainFirst=t.flatten=t.apSecond=t.apFirst=t.flap=t.getOrElse=t.getOrElseW=t.fold=t.match=t.foldW=t.matchW=t.isNone=t.isSome=t.FromEither=void 0;var i=e(4970),c=e(2397),a=e(2627),f=e(214),p=e(2836),l=e(8820),s=o(e(8231)),m=e(250),d=e(6291),g=e(6271),v=e(4462),h=e(2875);t.none=s.none,t.some=s.some,t.fromPredicate=function(n){return function(e){return n(e)?t.some(e):t.none}};t.getLeft=function(n){return"Right"===n._tag?t.none:t.some(n.left)};t.getRight=function(n){return"Left"===n._tag?t.none:t.some(n.right)};var y=function(n,e){return p.pipe(n,t.map(e))},b=function(n,e){return p.pipe(n,t.ap(e))},S=function(n,e){return p.pipe(n,t.chain(e))},R=function(n,e,r){return p.pipe(n,t.reduce(e,r))},_=function(n){var e=t.foldMap(n);return function(n,t){return p.pipe(n,e(t))}},q=function(n,e,r){return p.pipe(n,t.reduceRight(e,r))},M=function(n){var e=t.traverse(n);return function(n,t){return p.pipe(n,e(t))}},O=function(n,e){return p.pipe(n,t.alt(e))},A=function(n,e){return p.pipe(n,t.filter(e))},I=function(n,e){return p.pipe(n,t.filterMap(e))},E=function(n,e){return p.pipe(n,t.extend(e))},N=function(n,e){return p.pipe(n,t.partition(e))},U=function(n,e){return p.pipe(n,t.partitionMap(e))};t.URI="Option";t.getShow=function(n){return{show:function(e){return t.isNone(e)?"none":"some("+n.show(e.value)+")"}}};t.getEq=function(n){return{equals:function(e,r){return e===r||(t.isNone(e)?t.isNone(r):!t.isNone(r)&&n.equals(e.value,r.value))}}};t.getOrd=function(n){return{equals:t.getEq(n).equals,compare:function(e,r){return e===r?0:t.isSome(e)?t.isSome(r)?n.compare(e.value,r.value):1:-1}}};t.getMonoid=function(n){return{concat:function(e,r){return t.isNone(e)?r:t.isNone(r)?e:t.some(n.concat(e.value,r.value))},empty:t.none}};t.map=function(n){return function(e){return t.isNone(e)?t.none:t.some(n(e.value))}},t.Functor={URI:t.URI,map:y},t.of=t.some,t.Pointed={URI:t.URI,of:t.of};t.ap=function(n){return function(e){return t.isNone(e)||t.isNone(n)?t.none:t.some(e.value(n.value))}},t.Apply={URI:t.URI,map:y,ap:b},t.Applicative={URI:t.URI,map:y,ap:b,of:t.of};t.chain=function(n){return function(e){return t.isNone(e)?t.none:n(e.value)}},t.Chain={URI:t.URI,map:y,ap:b,chain:S},t.Monad={URI:t.URI,map:y,ap:b,of:t.of,chain:S};t.reduce=function(n,e){return function(r){return t.isNone(r)?n:e(n,r.value)}};t.foldMap=function(n){return function(e){return function(r){return t.isNone(r)?n.empty:e(r.value)}}};t.reduceRight=function(n,e){return function(r){return t.isNone(r)?n:e(r.value,n)}},t.Foldable={URI:t.URI,reduce:R,foldMap:_,reduceRight:q};t.altW=function(n){return function(e){return t.isNone(e)?n():e}},t.alt=t.altW,t.Alt={URI:t.URI,map:y,alt:O};t.zero=function(){return t.none},t.Zero={URI:t.URI,zero:t.zero},t.guard=h.guard(t.Zero,t.Pointed),t.Alternative={URI:t.URI,map:y,ap:b,of:t.of,alt:O,zero:t.zero};t.extend=function(n){return function(e){return t.isNone(e)?t.none:t.some(n(e))}},t.Extend={URI:t.URI,map:y,extend:E},t.compact=t.chain(p.identity);var w=g.separated(t.none,t.none);t.separate=function(n){return t.isNone(n)?w:g.separated(t.getLeft(n.value),t.getRight(n.value))},t.Compactable={URI:t.URI,compact:t.compact,separate:t.separate};t.filter=function(n){return function(e){return t.isNone(e)?t.none:n(e.value)?e:t.none}};t.filterMap=function(n){return function(e){return t.isNone(e)?t.none:n(e.value)}};t.partition=function(n){return function(t){return g.separated(A(t,m.not(n)),A(t,n))}};t.partitionMap=function(n){return p.flow(t.map(n),t.separate)},t.Filterable={URI:t.URI,map:y,compact:t.compact,separate:t.separate,filter:A,filterMap:I,partition:N,partitionMap:U};t.traverse=function(n){return function(e){return function(r){return t.isNone(r)?n.of(t.none):n.map(e(r.value),t.some)}}};t.sequence=function(n){return function(e){return t.isNone(e)?n.of(t.none):n.map(e.value,t.some)}},t.Traversable={URI:t.URI,map:y,reduce:R,foldMap:_,reduceRight:q,traverse:M,sequence:t.sequence};var j=v.witherDefault(t.Traversable,t.Compactable),P=v.wiltDefault(t.Traversable,t.Compactable);t.wither=function(n){var t=j(n);return function(n){return function(e){return t(e,n)}}};t.wilt=function(n){var t=P(n);return function(n){return function(e){return t(e,n)}}},t.Witherable={URI:t.URI,map:y,reduce:R,foldMap:_,reduceRight:q,traverse:M,sequence:t.sequence,compact:t.compact,separate:t.separate,filter:A,filterMap:I,partition:N,partitionMap:U,wither:j,wilt:P};t.throwError=function(){return t.none},t.MonadThrow={URI:t.URI,map:y,ap:b,of:t.of,chain:S,throwError:t.throwError},t.fromEither=t.getRight,t.FromEither={URI:t.URI,fromEither:t.fromEither},t.isSome=s.isSome;t.isNone=function(n){return"None"===n._tag};t.matchW=function(n,e){return function(r){return t.isNone(r)?n():e(r.value)}},t.foldW=t.matchW,t.match=t.matchW,t.fold=t.match;t.getOrElseW=function(n){return function(e){return t.isNone(e)?n():e.value}},t.getOrElse=t.getOrElseW,t.flap=l.flap(t.Functor),t.apFirst=c.apFirst(t.Apply),t.apSecond=c.apSecond(t.Apply),t.flatten=t.compact,t.chainFirst=a.chainFirst(t.Chain),t.duplicate=t.extend(p.identity),t.fromEitherK=f.fromEitherK(t.FromEither),t.chainEitherK=f.chainEitherK(t.FromEither,t.Chain);t.fromNullable=function(n){return null==n?t.none:t.some(n)};t.tryCatch=function(n){try{return t.some(n())}catch(e){return t.none}};t.tryCatchK=function(n){return function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return t.tryCatch((function(){return n.apply(void 0,e)}))}};t.fromNullableK=function(n){return p.flow(n,t.fromNullable)};t.chainNullableK=function(n){return function(e){return t.isNone(e)?t.none:t.fromNullable(n(e.value))}},t.toNullable=t.match(p.constNull,p.identity),t.toUndefined=t.match(p.constUndefined,p.identity),t.elem=function n(e){return function(r,u){if(void 0===u){var o=n(e);return function(n){return o(r,n)}}return!t.isNone(u)&&e.equals(r,u.value)}};t.exists=function(n){return function(e){return!t.isNone(e)&&n(e.value)}},t.Do=t.of(s.emptyRecord),t.bindTo=l.bindTo(t.Functor),t.bind=a.bind(t.Chain),t.apS=c.apS(t.Apply),t.ApT=t.of(s.emptyReadonlyArray);t.traverseReadonlyNonEmptyArrayWithIndex=function(n){return function(e){var r=n(0,s.head(e));if(t.isNone(r))return t.none;for(var u=[r.value],o=1;o<e.length;o++){var i=n(o,e[o]);if(t.isNone(i))return t.none;u.push(i.value)}return t.some(u)}};t.traverseReadonlyArrayWithIndex=function(n){var e=t.traverseReadonlyNonEmptyArrayWithIndex(n);return function(n){return s.isNonEmpty(n)?e(n):t.ApT}},t.traverseArrayWithIndex=t.traverseReadonlyArrayWithIndex;t.traverseArray=function(n){return t.traverseReadonlyArrayWithIndex((function(t,e){return n(e)}))},t.sequenceArray=t.traverseArray(p.identity),t.getRefinement=function(n){return function(e){return t.isSome(n(e))}},t.mapNullable=t.chainNullableK,t.option={URI:t.URI,map:y,of:t.of,ap:b,chain:S,reduce:R,foldMap:_,reduceRight:q,traverse:M,sequence:t.sequence,zero:t.zero,alt:O,extend:E,compact:t.compact,separate:t.separate,filter:A,filterMap:I,partition:N,partitionMap:U,wither:j,wilt:P,throwError:t.throwError},t.getApplySemigroup=c.getApplySemigroup(t.Apply),t.getApplyMonoid=i.getApplicativeMonoid(t.Applicative);t.getFirstMonoid=function(){return t.getMonoid(d.first())};t.getLastMonoid=function(){return t.getMonoid(d.last())}},9353:function(n,t,e){Object.defineProperty(t,"__esModule",{value:!0}),t.ordDate=t.ordNumber=t.ordString=t.ordBoolean=t.ord=t.getDualOrd=t.getTupleOrd=t.between=t.clamp=t.max=t.min=t.geq=t.leq=t.gt=t.lt=t.equals=t.trivial=t.Contravariant=t.getMonoid=t.getSemigroup=t.URI=t.contramap=t.reverse=t.tuple=t.fromCompare=t.equalsDefault=void 0;var r=e(6446),u=e(2836);t.equalsDefault=function(n){return function(t,e){return t===e||0===n(t,e)}};t.fromCompare=function(n){return{equals:t.equalsDefault(n),compare:function(t,e){return t===e?0:n(t,e)}}};t.tuple=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return t.fromCompare((function(t,e){for(var r=0;r<n.length-1;r++){var u=n[r].compare(t[r],e[r]);if(0!==u)return u}return n[r].compare(t[r],e[r])}))};t.reverse=function(n){return t.fromCompare((function(t,e){return n.compare(e,t)}))};t.contramap=function(n){return function(e){return t.fromCompare((function(t,r){return e.compare(n(t),n(r))}))}},t.URI="Ord";t.getSemigroup=function(){return{concat:function(n,e){return t.fromCompare((function(t,r){var u=n.compare(t,r);return 0!==u?u:e.compare(t,r)}))}}};t.getMonoid=function(){return{concat:t.getSemigroup().concat,empty:t.fromCompare((function(){return 0}))}},t.Contravariant={URI:t.URI,contramap:function(n,e){return u.pipe(n,t.contramap(e))}},t.trivial={equals:u.constTrue,compare:u.constant(0)};t.equals=function(n){return function(t){return function(e){return e===t||0===n.compare(e,t)}}};t.lt=function(n){return function(t,e){return-1===n.compare(t,e)}};t.gt=function(n){return function(t,e){return 1===n.compare(t,e)}};t.leq=function(n){return function(t,e){return 1!==n.compare(t,e)}};t.geq=function(n){return function(t,e){return-1!==n.compare(t,e)}};t.min=function(n){return function(t,e){return t===e||n.compare(t,e)<1?t:e}};t.max=function(n){return function(t,e){return t===e||n.compare(t,e)>-1?t:e}};t.clamp=function(n){var e=t.min(n),r=t.max(n);return function(n,t){return function(u){return r(e(u,t),n)}}};t.between=function(n){var e=t.lt(n),r=t.gt(n);return function(n,t){return function(u){return!e(u,n)&&!r(u,t)}}},t.getTupleOrd=t.tuple,t.getDualOrd=t.reverse,t.ord=t.Contravariant;var o={equals:r.eqStrict.equals,compare:function(n,t){return n<t?-1:n>t?1:0}};t.ordBoolean=o,t.ordString=o,t.ordNumber=o,t.ordDate=u.pipe(t.ordNumber,t.contramap((function(n){return n.valueOf()})))},250:function(n,t,e){Object.defineProperty(t,"__esModule",{value:!0}),t.and=t.or=t.not=t.Contravariant=t.getMonoidAll=t.getSemigroupAll=t.getMonoidAny=t.getSemigroupAny=t.URI=t.contramap=void 0;var r=e(2836);t.contramap=function(n){return function(t){return r.flow(n,t)}},t.URI="Predicate";t.getSemigroupAny=function(){return{concat:function(n,e){return r.pipe(n,t.or(e))}}};t.getMonoidAny=function(){return{concat:t.getSemigroupAny().concat,empty:r.constFalse}};t.getSemigroupAll=function(){return{concat:function(n,e){return r.pipe(n,t.and(e))}}};t.getMonoidAll=function(){return{concat:t.getSemigroupAll().concat,empty:r.constTrue}},t.Contravariant={URI:t.URI,contramap:function(n,e){return r.pipe(n,t.contramap(e))}};t.not=function(n){return function(t){return!n(t)}};t.or=function(n){return function(t){return function(e){return t(e)||n(e)}}};t.and=function(n){return function(t){return function(e){return t(e)&&n(e)}}}},6291:function(n,t,e){var r=this&&this.__createBinding||(Object.create?function(n,t,e,r){void 0===r&&(r=e),Object.defineProperty(n,r,{enumerable:!0,get:function(){return t[e]}})}:function(n,t,e,r){void 0===r&&(r=e),n[r]=t[e]}),u=this&&this.__setModuleDefault||(Object.create?function(n,t){Object.defineProperty(n,"default",{enumerable:!0,value:t})}:function(n,t){n.default=t}),o=this&&this.__importStar||function(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)"default"!==e&&Object.prototype.hasOwnProperty.call(n,e)&&r(t,n,e);return u(t,n),t};Object.defineProperty(t,"__esModule",{value:!0}),t.semigroupProduct=t.semigroupSum=t.semigroupString=t.getFunctionSemigroup=t.semigroupAny=t.semigroupAll=t.fold=t.getIntercalateSemigroup=t.getMeetSemigroup=t.getJoinSemigroup=t.getDualSemigroup=t.getStructSemigroup=t.getTupleSemigroup=t.getFirstSemigroup=t.getLastSemigroup=t.getObjectSemigroup=t.semigroupVoid=t.concatAll=t.last=t.first=t.intercalate=t.tuple=t.struct=t.reverse=t.constant=t.max=t.min=void 0;var i=e(2836),c=o(e(8231)),a=o(e(660)),f=o(e(9353));t.min=function(n){return{concat:f.min(n)}};t.max=function(n){return{concat:f.max(n)}};t.constant=function(n){return{concat:function(){return n}}},t.reverse=a.reverse;t.struct=function(n){return{concat:function(t,e){var r={};for(var u in n)c.has.call(n,u)&&(r[u]=n[u].concat(t[u],e[u]));return r}}};t.tuple=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return{concat:function(t,e){return n.map((function(n,r){return n.concat(t[r],e[r])}))}}};t.intercalate=function(n){return function(t){return{concat:function(e,r){return t.concat(e,t.concat(n,r))}}}};t.first=function(){return{concat:i.identity}};t.last=function(){return{concat:function(n,t){return t}}},t.concatAll=a.concatAll,t.semigroupVoid=t.constant(void 0);t.getObjectSemigroup=function(){return{concat:function(n,t){return Object.assign({},n,t)}}},t.getLastSemigroup=t.last,t.getFirstSemigroup=t.first,t.getTupleSemigroup=t.tuple,t.getStructSemigroup=t.struct,t.getDualSemigroup=t.reverse,t.getJoinSemigroup=t.max,t.getMeetSemigroup=t.min,t.getIntercalateSemigroup=t.intercalate,t.fold=function(n){var e=t.concatAll(n);return function(n,t){return void 0===t?e(n):e(n)(t)}},t.semigroupAll={concat:function(n,t){return n&&t}},t.semigroupAny={concat:function(n,t){return n||t}},t.getFunctionSemigroup=i.getSemigroup,t.semigroupString={concat:function(n,t){return n+t}},t.semigroupSum={concat:function(n,t){return n+t}},t.semigroupProduct={concat:function(n,t){return n*t}}},6271:function(n,t,e){Object.defineProperty(t,"__esModule",{value:!0}),t.right=t.left=t.flap=t.Functor=t.Bifunctor=t.URI=t.bimap=t.mapLeft=t.map=t.separated=void 0;var r=e(2836),u=e(8820);t.separated=function(n,t){return{left:n,right:t}};t.map=function(n){return function(e){return t.separated(t.left(e),n(t.right(e)))}};t.mapLeft=function(n){return function(e){return t.separated(n(t.left(e)),t.right(e))}};t.bimap=function(n,e){return function(r){return t.separated(n(t.left(r)),e(t.right(r)))}},t.URI="Separated",t.Bifunctor={URI:t.URI,mapLeft:function(n,e){return r.pipe(n,t.mapLeft(e))},bimap:function(n,e,u){return r.pipe(n,t.bimap(e,u))}},t.Functor={URI:t.URI,map:function(n,e){return r.pipe(n,t.map(e))}},t.flap=u.flap(t.Functor);t.left=function(n){return n.left};t.right=function(n){return n.right}},4462:function(n,t,e){var r=this&&this.__createBinding||(Object.create?function(n,t,e,r){void 0===r&&(r=e),Object.defineProperty(n,r,{enumerable:!0,get:function(){return t[e]}})}:function(n,t,e,r){void 0===r&&(r=e),n[r]=t[e]}),u=this&&this.__setModuleDefault||(Object.create?function(n,t){Object.defineProperty(n,"default",{enumerable:!0,value:t})}:function(n,t){n.default=t}),o=this&&this.__importStar||function(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)"default"!==e&&Object.prototype.hasOwnProperty.call(n,e)&&r(t,n,e);return u(t,n),t};Object.defineProperty(t,"__esModule",{value:!0}),t.filterE=t.witherDefault=t.wiltDefault=void 0;var i=o(e(8231));t.wiltDefault=function(n,t){return function(e){var r=n.traverse(e);return function(n,u){return e.map(r(n,u),t.separate)}}},t.witherDefault=function(n,t){return function(e){var r=n.traverse(e);return function(n,u){return e.map(r(n,u),t.compact)}}},t.filterE=function(n){return function(t){var e=n.wither(t);return function(n){return function(r){return e(r,(function(e){return t.map(n(e),(function(n){return n?i.some(e):i.none}))}))}}}}},2875:function(n,t){Object.defineProperty(t,"__esModule",{value:!0}),t.guard=void 0,t.guard=function(n,t){return function(e){return e?t.of(void 0):n.zero()}}},2836:function(n,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getEndomorphismMonoid=t.not=t.SK=t.hole=t.pipe=t.untupled=t.tupled=t.absurd=t.decrement=t.increment=t.tuple=t.flow=t.flip=t.constVoid=t.constUndefined=t.constNull=t.constFalse=t.constTrue=t.constant=t.unsafeCoerce=t.identity=t.apply=t.getRing=t.getSemiring=t.getMonoid=t.getSemigroup=t.getBooleanAlgebra=void 0;t.getBooleanAlgebra=function(n){return function(){return{meet:function(t,e){return function(r){return n.meet(t(r),e(r))}},join:function(t,e){return function(r){return n.join(t(r),e(r))}},zero:function(){return n.zero},one:function(){return n.one},implies:function(t,e){return function(r){return n.implies(t(r),e(r))}},not:function(t){return function(e){return n.not(t(e))}}}}};t.getSemigroup=function(n){return function(){return{concat:function(t,e){return function(r){return n.concat(t(r),e(r))}}}}};t.getMonoid=function(n){var e=t.getSemigroup(n);return function(){return{concat:e().concat,empty:function(){return n.empty}}}};t.getSemiring=function(n){return{add:function(t,e){return function(r){return n.add(t(r),e(r))}},zero:function(){return n.zero},mul:function(t,e){return function(r){return n.mul(t(r),e(r))}},one:function(){return n.one}}};t.getRing=function(n){var e=t.getSemiring(n);return{add:e.add,mul:e.mul,one:e.one,zero:e.zero,sub:function(t,e){return function(r){return n.sub(t(r),e(r))}}}};function e(n){return n}function r(n){return function(){return n}}function u(n,t,e,r,u,o,i,c,a){switch(arguments.length){case 1:return n;case 2:return function(){return t(n.apply(this,arguments))};case 3:return function(){return e(t(n.apply(this,arguments)))};case 4:return function(){return r(e(t(n.apply(this,arguments))))};case 5:return function(){return u(r(e(t(n.apply(this,arguments)))))};case 6:return function(){return o(u(r(e(t(n.apply(this,arguments))))))};case 7:return function(){return i(o(u(r(e(t(n.apply(this,arguments)))))))};case 8:return function(){return c(i(o(u(r(e(t(n.apply(this,arguments))))))))};case 9:return function(){return a(c(i(o(u(r(e(t(n.apply(this,arguments)))))))))}}}function o(n){throw new Error("Called `absurd` function which should be uncallable")}t.apply=function(n){return function(t){return t(n)}},t.identity=e,t.unsafeCoerce=e,t.constant=r,t.constTrue=r(!0),t.constFalse=r(!1),t.constNull=r(null),t.constUndefined=r(void 0),t.constVoid=t.constUndefined,t.flip=function(n){return function(t,e){return n(e,t)}},t.flow=u,t.tuple=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return n},t.increment=function(n){return n+1},t.decrement=function(n){return n-1},t.absurd=o,t.tupled=function(n){return function(t){return n.apply(void 0,t)}},t.untupled=function(n){return function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return n(t)}},t.pipe=function(n,t,e,r,u,o,i,c,a){switch(arguments.length){case 1:return n;case 2:return t(n);case 3:return e(t(n));case 4:return r(e(t(n)));case 5:return u(r(e(t(n))));case 6:return o(u(r(e(t(n)))));case 7:return i(o(u(r(e(t(n))))));case 8:return c(i(o(u(r(e(t(n)))))));case 9:return a(c(i(o(u(r(e(t(n))))))));default:for(var f=arguments[0],p=1;p<arguments.length;p++)f=arguments[p](f);return f}},t.hole=o;t.SK=function(n,t){return t},t.not=function(n){return function(t){return!n(t)}};t.getEndomorphismMonoid=function(){return{concat:function(n,t){return u(n,t)},empty:e}}},8231:function(n,t){var e=this&&this.__spreadArray||function(n,t){for(var e=0,r=t.length,u=n.length;e<r;e++,u++)n[u]=t[e];return n};Object.defineProperty(t,"__esModule",{value:!0}),t.fromReadonlyNonEmptyArray=t.has=t.emptyRecord=t.emptyReadonlyArray=t.tail=t.head=t.isNonEmpty=t.singleton=t.right=t.left=t.isRight=t.isLeft=t.some=t.none=t.isSome=t.isNone=void 0;t.isNone=function(n){return"None"===n._tag};t.isSome=function(n){return"Some"===n._tag},t.none={_tag:"None"};t.some=function(n){return{_tag:"Some",value:n}};t.isLeft=function(n){return"Left"===n._tag};t.isRight=function(n){return"Right"===n._tag};t.left=function(n){return{_tag:"Left",left:n}};t.right=function(n){return{_tag:"Right",right:n}};t.singleton=function(n){return[n]};t.isNonEmpty=function(n){return n.length>0};t.head=function(n){return n[0]};t.tail=function(n){return n.slice(1)},t.emptyReadonlyArray=[],t.emptyRecord={},t.has=Object.prototype.hasOwnProperty;t.fromReadonlyNonEmptyArray=function(n){return e([n[0]],n.slice(1))}}}]);
//# sourceMappingURL=5be4e8753b0931d7b4ecbd7ba625baf3697c7dc0-e175bdc24a0ed632d850.js.map