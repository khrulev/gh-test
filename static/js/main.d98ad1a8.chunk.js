(this["webpackJsonpreact-js-buy"]=this["webpackJsonpreact-js-buy"]||[]).push([[0],{38:function(e,t,n){e.exports=n(52)},50:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),i=n(30),r=n.n(i),o=n(15),c=n(11),u=n(12),l=n(6),m=n(14),h=n(13),d=n(18),p=n(25),b=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return s.a.createElement("select",{className:"Product__option",name:this.props.option.name,key:this.props.option.name,onChange:this.props.handleOptionChange},this.props.option.values.map((function(t){return s.a.createElement("option",{value:t,key:"".concat(e.props.option.name,"-").concat(t)},"".concat(t))})))}}]),n}(a.Component),g=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={selectedOptions:{}},a.handleOptionChange=a.handleOptionChange.bind(Object(l.a)(a)),a.handleQuantityChange=a.handleQuantityChange.bind(Object(l.a)(a)),a.findImage=a.findImage.bind(Object(l.a)(a)),a}return Object(u.a)(n,[{key:"componentWillMount",value:function(){var e=this;this.props.product.options.forEach((function(t){e.setState((function(e){return{selectedOptions:Object(p.a)(Object(p.a)({},e.selectedOptions),{},Object(d.a)({},t.name,t.values[0]))}}))}))}},{key:"findImage",value:function(e,t){var n=e[0];return(e.filter((function(e){return e.variant_ids.includes(t)}))[0]||n).src}},{key:"handleOptionChange",value:function(e){var t=e.target,n=this.state.selectedOptions;n[t.name]=t.value;var a=this.props.product.variants.edges.find((function(e){return e.node.selectedOptions.every((function(e){return n[e.name]===e.value}))})).node;this.setState({selectedVariant:a,selectedVariantImage:a.image.src})}},{key:"handleQuantityChange",value:function(e){this.setState({selectedVariantQuantity:e.target.value})}},{key:"addVariantToCart_Test",value:function(e,t){console.log("postMessage","setItemToCart_AfterQuiz"),window.parent.postMessage({setItemToCart_AfterQuiz:[1,2,3,4,5,6]},"*")}},{key:"render",value:function(){var e=this,t=this.state.selectedVariantImage||this.props.product.images.edges[0].node.src,n=this.state.selectedVariant||this.props.product.variants.edges[0].node,a=this.state.selectedVariantQuantity||1,i=this.props.product.options.map((function(t){return s.a.createElement(b,{handleOptionChange:e.handleOptionChange,key:t.id.toString(),option:t})}));return s.a.createElement("div",{className:"Product"},this.props.product.images.edges.length?s.a.createElement("img",{src:t,alt:"".concat(this.props.product.title," product shot")}):null,s.a.createElement("h5",{className:"Product__title"},this.props.product.title),s.a.createElement("span",{className:"Product__price"},"$",n.price),i,s.a.createElement("label",{className:"Product__option"},"Quantity",s.a.createElement("input",{min:"1",type:"number",defaultValue:a,onChange:this.handleQuantityChange})))}}]),n}(a.Component),C=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).decrementQuantity=a.decrementQuantity.bind(Object(l.a)(a)),a.incrementQuantity=a.incrementQuantity.bind(Object(l.a)(a)),a}return Object(u.a)(n,[{key:"decrementQuantity",value:function(e){this.props.updateLineItemInCart(e,this.props.line_item.quantity-1)}},{key:"incrementQuantity",value:function(e){this.props.updateLineItemInCart(e,this.props.line_item.quantity+1)}},{key:"render",value:function(){var e=this;return s.a.createElement("li",{className:"Line-item"},s.a.createElement("div",{className:"Line-item__img"},this.props.line_item.variant.image?s.a.createElement("img",{src:this.props.line_item.variant.image.src,alt:"".concat(this.props.line_item.title," product shot")}):null),s.a.createElement("div",{className:"Line-item__content"},s.a.createElement("div",{className:"Line-item__content-row"},s.a.createElement("div",{className:"Line-item__variant-title"},this.props.line_item.variant.title),s.a.createElement("span",{className:"Line-item__title"},this.props.line_item.title)),s.a.createElement("div",{className:"Line-item__content-row"},s.a.createElement("div",{className:"Line-item__quantity-container"},s.a.createElement("button",{className:"Line-item__quantity-update",onClick:function(){return e.decrementQuantity(e.props.line_item.id)}},"-"),s.a.createElement("span",{className:"Line-item__quantity"},this.props.line_item.quantity),s.a.createElement("button",{className:"Line-item__quantity-update",onClick:function(){return e.incrementQuantity(e.props.line_item.id)}},"+")),s.a.createElement("span",{className:"Line-item__price"},"$ ",(this.props.line_item.quantity*this.props.line_item.variant.price).toFixed(2)),s.a.createElement("button",{className:"Line-item__remove",onClick:function(){return e.props.removeLineItemInCart(e.props.line_item.id)}},"\xd7"))))}}]),n}(a.Component),v=(a.Component,n(53)),k=n(22),f=n(16),E=n.n(f);function O(){var e=Object(o.a)(["\n  mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {\n    customerAccessTokenCreate(input: $input) {\n      userErrors {\n        field\n        message\n      }\n      customerAccessToken {\n        accessToken\n        expiresAt\n      }\n    }\n  }\n"]);return O=function(){return e},e}function _(){var e=Object(o.a)(["\n  mutation customerCreate($input: CustomerCreateInput!) {\n    customerCreate(input: $input) {\n      userErrors {\n        field\n        message\n      }\n      customer {\n        id\n      }\n    }\n  }\n"]);return _=function(){return e},e}var y=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={email:"",password:"",nonFieldErrorMessage:null,emailErrorMessage:null,passwordErrorMessage:null},a.handleInputChange=a.handleInputChange.bind(Object(l.a)(a)),a.createCustomerAccount=a.createCustomerAccount.bind(Object(l.a)(a)),a.resetErrorMessages=a.resetErrorMessages.bind(Object(l.a)(a)),a.resetInputFields=a.resetInputFields.bind(Object(l.a)(a)),a}return Object(u.a)(n,[{key:"handleInputChange",value:function(e){var t=e.target,n=t.value,a=t.name;this.setState(Object(d.a)({},a,n))}},{key:"resetErrorMessages",value:function(){this.setState({nonFieldErrorMessage:null,emailErrorMessage:null,passwordErrorMessage:null})}},{key:"resetInputFields",value:function(){this.setState({email:"",password:""})}},{key:"handleSubmit",value:function(e,t){this.resetErrorMessages(),this.props.newCustomer?this.createCustomerAccount(e,t):this.loginCustomerAccount(e,t)}},{key:"createCustomerAccount",value:function(e,t){var n=this,a={email:e,password:t};this.props.customerCreate({variables:{input:a}}).then((function(e){e.data.customerCreate.customer?(n.props.closeCustomerAuth(),n.props.showAccountVerificationMessage()):e.data.customerCreate.userErrors.forEach(function(e){e.field?this.setState(Object(d.a)({},e.field+"ErrorMessage",e.message)):this.setState({nonFieldErrorMessage:e.message})}.bind(n))}))}},{key:"loginCustomerAccount",value:function(e,t){var n=this,a={email:e,password:t};this.props.customerAccessTokenCreate({variables:{input:a}}).then((function(e){e.data.customerAccessTokenCreate.customerAccessToken?n.props.associateCustomerCheckout(e.data.customerAccessTokenCreate.customerAccessToken.accessToken):e.data.customerAccessTokenCreate.userErrors.forEach(function(e){null!=e.field?this.setState(Object(d.a)({},e.field+"ErrorMessage",e.message)):this.setState({nonFieldErrorMessage:e.message})}.bind(n))}))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"CustomerAuth ".concat(this.props.isCustomerAuthOpen?"CustomerAuth--open":"")},s.a.createElement("button",{onClick:function(){e.props.closeCustomerAuth(),e.resetErrorMessages(),e.resetInputFields()},className:"CustomerAuth__close"},"\xd7"),s.a.createElement("div",{className:"CustomerAuth__body"},s.a.createElement("h2",{className:"CustomerAuth__heading"},this.props.newCustomer?"Create your Account":"Log in to your account"),this.state.nonFieldErrorMessage&&s.a.createElement("div",{className:"error"},this.state.nonFieldErrorMessage),s.a.createElement("label",{className:"CustomerAuth__credential"},s.a.createElement("input",{className:"CustomerAuth__input",type:"email",placeholder:"Email",name:"email",value:this.state.email,onChange:this.handleInputChange}),this.state.emailErrorMessage&&s.a.createElement("div",{className:"error"},this.state.emailErrorMessage)),s.a.createElement("label",{className:"CustomerAuth__credential"},s.a.createElement("input",{className:"CustomerAuth__input",type:"password",placeholder:"Password",name:"password",value:this.state.password,onChange:this.handleInputChange}),this.state.passwordErrorMessage&&s.a.createElement("div",{className:"error"},this.state.passwordErrorMessage)),s.a.createElement("button",{className:"CustomerAuth__submit button",type:"submit",onClick:function(){return e.handleSubmit(e.state.email,e.state.password)}},this.props.newCustomer?"Create Account":"Log in")))}}]),n}(a.Component),I=E()(_()),A=E()(O());Object(k.flowRight)(Object(v.a)(I,{name:"customerCreate"}),Object(v.a)(A,{name:"customerAccessTokenCreate"}))(y);function j(){var e=Object(o.a)(["\n  mutation checkoutCustomerAssociate($checkoutId: ID!, $customerAccessToken: String!) {\n    checkoutCustomerAssociate(checkoutId: $checkoutId, customerAccessToken: $customerAccessToken) {\n      userErrors {\n        field\n        message\n      }\n      checkout {\n        ...CheckoutFragment\n      }\n    }\n  }\n  ","\n"]);return j=function(){return e},e}function N(){var e=Object(o.a)(["\n  mutation checkoutLineItemsRemove ($checkoutId: ID!, $lineItemIds: [ID!]!) {\n    checkoutLineItemsRemove(checkoutId: $checkoutId, lineItemIds: $lineItemIds) {\n      userErrors {\n        message\n        field\n      }\n      checkout {\n        ...CheckoutFragment\n      }\n    }\n  }\n  ","\n"]);return N=function(){return e},e}function w(){var e=Object(o.a)(["\n  mutation checkoutLineItemsUpdate ($checkoutId: ID!, $lineItems: [CheckoutLineItemUpdateInput!]!) {\n    checkoutLineItemsUpdate(checkoutId: $checkoutId, lineItems: $lineItems) {\n      userErrors {\n        message\n        field\n      }\n      checkout {\n        ...CheckoutFragment\n      }\n    }\n  }\n  ","\n"]);return w=function(){return e},e}function T(){var e=Object(o.a)(["\n  mutation checkoutLineItemsAdd ($checkoutId: ID!, $lineItems: [CheckoutLineItemInput!]!) {\n    checkoutLineItemsAdd(checkoutId: $checkoutId, lineItems: $lineItems) {\n      userErrors {\n        message\n        field\n      }\n      checkout {\n        ...CheckoutFragment\n      }\n    }\n  }\n  ","\n"]);return T=function(){return e},e}function L(){var e=Object(o.a)(["\n  mutation checkoutCreate ($input: CheckoutCreateInput!){\n    checkoutCreate(input: $input) {\n      userErrors {\n        message\n        field\n      }\n      checkout {\n        ...CheckoutFragment\n      }\n    }\n  }\n  ","\n"]);return L=function(){return e},e}function Q(){var e=Object(o.a)(["\n  fragment CheckoutFragment on Checkout {\n    id\n    webUrl\n    totalTax\n    subtotalPrice\n    totalPrice\n    lineItems (first: 250) {\n      edges {\n        node {\n          id\n          title\n          variant {\n            id\n            title\n            image {\n              src\n            }\n            price\n          }\n          quantity\n        }\n      }\n    }\n  }\n"]);return Q=function(){return e},e}var M=E()(Q()),S=E()(L(),M),x=E()(T(),M),z=E()(w(),M),P=E()(N(),M),$=E()(j(),M);function F(e,t){var n=this;this.props.checkoutLineItemsAdd({variables:{checkoutId:this.state.checkout.id,lineItems:[{variantId:e,quantity:parseInt(t,10)}]}}).then((function(e){n.setState({checkout:e.data.checkoutLineItemsAdd.checkout})})),this.handleCartOpen()}function V(e,t){var n=this;this.props.checkoutLineItemsUpdate({variables:{checkoutId:this.state.checkout.id,lineItems:[{id:e,quantity:parseInt(t,10)}]}}).then((function(e){n.setState({checkout:e.data.checkoutLineItemsUpdate.checkout})}))}function q(e){var t=this;this.props.checkoutLineItemsRemove({variables:{checkoutId:this.state.checkout.id,lineItemIds:[e]}}).then((function(e){t.setState({checkout:e.data.checkoutLineItemsRemove.checkout})}))}function R(e){var t=this;this.props.checkoutCustomerAssociate({variables:{checkoutId:this.state.checkout.id,customerAccessToken:e}}).then((function(e){t.setState({checkout:e.data.checkoutCustomerAssociate.checkout,isCustomerAuthOpen:!1})}))}function D(){var e=Object(o.a)(["\n  query query {\n    shop {\n      name\n      description\n      products(first:20) {\n        pageInfo {\n          hasNextPage\n          hasPreviousPage\n        }\n        edges {\n          node {\n            id\n            title\n            options {\n              id\n              name\n              values\n            }\n            variants(first: 250) {\n              pageInfo {\n                hasNextPage\n                hasPreviousPage\n              }\n              edges {\n                node {\n                  id\n                  title\n                  selectedOptions {\n                    name\n                    value\n                  }\n                  image {\n                    src\n                  }\n                  price\n                }\n              }\n            }\n            images(first: 250) {\n              pageInfo {\n                hasNextPage\n                hasPreviousPage\n              }\n              edges {\n                node {\n                  src\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"]);return D=function(){return e},e}var U=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).state={isCartOpen:!1,isCustomerAuthOpen:!1,isNewCustomer:!1,products:[],checkout:{lineItems:{edges:[]}},pageQuiz:1,selectedOption:"option1",selectedOption2:"option1"},e.handleCartClose=e.handleCartClose.bind(Object(l.a)(e)),e.handleCartOpen=e.handleCartOpen.bind(Object(l.a)(e)),e.openCustomerAuth=e.openCustomerAuth.bind(Object(l.a)(e)),e.closeCustomerAuth=e.closeCustomerAuth.bind(Object(l.a)(e)),e.addVariantToCart=F.bind(Object(l.a)(e)),e.updateLineItemInCart=V.bind(Object(l.a)(e)),e.removeLineItemInCart=q.bind(Object(l.a)(e)),e.showAccountVerificationMessage=e.showAccountVerificationMessage.bind(Object(l.a)(e)),e.associateCustomerCheckout=R.bind(Object(l.a)(e)),e.openNextQuitzPage=e.openNextQuitzPage.bind(Object(l.a)(e)),e.handleOptionChange=e.handleOptionChange.bind(Object(l.a)(e)),e.handleOptionChange_YesNo=e.handleOptionChange_YesNo.bind(Object(l.a)(e)),e}return Object(u.a)(n,[{key:"componentWillMount",value:function(){var e=this;this.props.createCheckout({variables:{input:{}}}).then((function(t){e.setState({checkout:t.data.checkoutCreate.checkout})}))}},{key:"handleCartOpen",value:function(){this.setState({isCartOpen:!0})}},{key:"handleCartClose",value:function(){this.setState({isCartOpen:!1})}},{key:"openNextQuitzPage",value:function(){this.setState({pageQuiz:this.state.pageQuiz+1})}},{key:"openCustomerAuth",value:function(e){"new-customer"===e.target.getAttribute("data-customer-type")?this.setState({isNewCustomer:!0,isCustomerAuthOpen:!0}):this.setState({isNewCustomer:!1,isCustomerAuthOpen:!0})}},{key:"showAccountVerificationMessage",value:function(){var e=this;this.setState({accountVerificationMessage:!0}),setTimeout((function(){e.setState({accountVerificationMessage:!1})}),5e3)}},{key:"closeCustomerAuth",value:function(){this.setState({isCustomerAuthOpen:!1})}},{key:"addVariantToCart_Test",value:function(e,t){console.log("postMessage","setItemToCart_AfterQuiz"),window.parent.postMessage({setItemToCart_AfterQuiz:[1,2,3,4,5,6]},"*")}},{key:"handleOptionChange",value:function(e){this.setState({selectedOption:e.target.value})}},{key:"handleOptionChange_YesNo",value:function(e){this.setState({selectedOption2:e.target.value})}},{key:"render",value:function(){var e=this;return this.props.data.loading?s.a.createElement("p",{className:"loading"},"Loading ..."):this.props.data.error?s.a.createElement("p",null,this.props.data.error.message):1==this.state.pageQuiz?s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"Flash__message-wrapper"},s.a.createElement("p",{className:"Flash__message ".concat(this.state.accountVerificationMessage?"Flash__message--open":"")},"We have sent you an email, please click the link included to verify your email address")),s.a.createElement("header",{className:"App__header"},s.a.createElement("div",{className:"App__title"},s.a.createElement("h1",{className:"mg-150"},"The Ikebanna Box"),s.a.createElement("h2",null,"Give Them a Personalized Flower Box"),s.a.createElement("a",{href:"#finder-quiz-1781",className:"button btn slideshow__btn",onClick:this.openNextQuitzPage},"Begin The Flower Quiz")))):2==this.state.pageQuiz?s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"App__title"},s.a.createElement("h1",null,"Question 1/2")),s.a.createElement("div",{id:"content",class:"mui-container-fluid"},s.a.createElement("div",{class:"mui-col-sm-10 mui-col-sm-offset-1"},s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("h2",null,"Select your favorite color? "),s.a.createElement("div",{class:"mui-divider"}),s.a.createElement("br",null),s.a.createElement("form",{className:"form-color"},s.a.createElement("div",{class:"mui--text-black-54 mui--text-body2"},s.a.createElement("img",{src:"https://whai-dashboard.s3.us-east-2.amazonaws.com/stores/ikebanna.myshopify.com/395A0282.jpg",alt:"Color",width:"200",height:"100"}),s.a.createElement("input",{type:"radio",value:"option1",checked:"option1"===this.state.selectedOption,onChange:this.handleOptionChange})," Red"),s.a.createElement("div",{class:"mui--text-black-54 mui--text-body2"},s.a.createElement("img",{src:"https://whai-dashboard.s3.us-east-2.amazonaws.com/stores/ikebanna.myshopify.com/395A0283.jpg",alt:"Color",width:"200",height:"100"}),s.a.createElement("input",{type:"radio",value:"option2",checked:"option2"===this.state.selectedOption,onChange:this.handleOptionChange}),"Blue"),s.a.createElement("div",{class:"mui--text-black-54 mui--text-body2"},s.a.createElement("img",{src:"https://whai-dashboard.s3.us-east-2.amazonaws.com/stores/ikebanna.myshopify.com/395A0281.jpg",alt:"Color",width:"200",height:"100"}),s.a.createElement("input",{type:"radio",value:"option3",checked:"option3"===this.state.selectedOption,onChange:this.handleOptionChange}),"Green")))),s.a.createElement("div",{className:"btn-wrapper_block"},s.a.createElement("a",{href:"#finder-quiz-1781",className:"button btn slideshow__btn",onClick:this.openNextQuitzPage},"NEXT"))):3==this.state.pageQuiz?s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"App__title"},s.a.createElement("h1",null,"Question 2/2")),s.a.createElement("div",{id:"content",class:"mui-container-fluid"},s.a.createElement("div",{class:"mui-col-sm-10 mui-col-sm-offset-1"},s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("h2",null,"Do you want to get a big box?"),s.a.createElement("div",{class:"mui-divider"}),s.a.createElement("br",null),s.a.createElement("form",null,s.a.createElement("div",{class:"mui--text-black-54 mui--text-body2"},s.a.createElement("input",{type:"radio",value:"option1",checked:"option1"===this.state.selectedOption2,onChange:this.handleOptionChange_YesNo})," Yes"),s.a.createElement("br",null),s.a.createElement("div",{class:"mui--text-black-54 mui--text-body2"},s.a.createElement("input",{type:"radio",value:"option2",checked:"option2"===this.state.selectedOption2,onChange:this.handleOptionChange_YesNo}),"No"),s.a.createElement("br",null),s.a.createElement("br",null)))),s.a.createElement("div",{className:"btn-wrapper_block"},s.a.createElement("a",{href:"#finder-quiz-1781",className:"button btn slideshow__btn",onClick:this.openNextQuitzPage},"NEXT"))):4==this.state.pageQuiz?s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"App__title"},s.a.createElement("h1",null,"Recommend For You")),s.a.createElement("div",{className:"Product-wrapper"},this.props.data.shop.products.edges.map((function(t){return s.a.createElement(g,{addVariantToCart:e.addVariantToCart,checkout:e.state.checkout,key:t.node.id.toString(),product:t.node})}))),s.a.createElement("div",{className:"btn-wrapper_block"},s.a.createElement("a",{href:"#finder-quiz-1781",className:"button btn slideshow__btn",onClick:function(){return e.addVariantToCart_Test("variant.id","variantQuantity")}},"ADD TO CART"))):void 0}}]),n}(a.Component),Y=E()(D()),B=Object(k.flowRight)(Object(v.a)(Y),Object(v.a)(S,{name:"createCheckout"}),Object(v.a)(x,{name:"checkoutLineItemsAdd"}),Object(v.a)(z,{name:"checkoutLineItemsUpdate"}),Object(v.a)(P,{name:"checkoutLineItemsRemove"}),Object(v.a)($,{name:"checkoutCustomerAssociate"}))(U),W=n(19),X=n(37),G=n(35),J=n(36),H=n(5),K=(n(50),Object(X.a)({uri:"https://ikebanna.myshopify.com/api/graphql"})),Z=Object(G.a)((function(){return{headers:{"X-Shopify-Storefront-Access-Token":"2ab194bb1908b09935b0629edb28f45b"}}})),ee=new W.a({link:Z.concat(K),cache:new J.a});r.a.render(s.a.createElement(H.b,{client:ee},s.a.createElement(B,null)),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.d98ad1a8.chunk.js.map