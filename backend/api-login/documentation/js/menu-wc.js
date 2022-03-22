'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">LOGIN 1.0 Documentation Technical</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-cf1ae2fd78b55c4f6343899c5721c2ea11f2a78f855db67c0dfe2aad74b92f4e0faa82e583482c8d4e3e89e008b9f4ef48d2c493c1b2b461244c83593af94e47"' : 'data-target="#xs-controllers-links-module-AuthModule-cf1ae2fd78b55c4f6343899c5721c2ea11f2a78f855db67c0dfe2aad74b92f4e0faa82e583482c8d4e3e89e008b9f4ef48d2c493c1b2b461244c83593af94e47"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-cf1ae2fd78b55c4f6343899c5721c2ea11f2a78f855db67c0dfe2aad74b92f4e0faa82e583482c8d4e3e89e008b9f4ef48d2c493c1b2b461244c83593af94e47"' :
                                            'id="xs-controllers-links-module-AuthModule-cf1ae2fd78b55c4f6343899c5721c2ea11f2a78f855db67c0dfe2aad74b92f4e0faa82e583482c8d4e3e89e008b9f4ef48d2c493c1b2b461244c83593af94e47"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-cf1ae2fd78b55c4f6343899c5721c2ea11f2a78f855db67c0dfe2aad74b92f4e0faa82e583482c8d4e3e89e008b9f4ef48d2c493c1b2b461244c83593af94e47"' : 'data-target="#xs-injectables-links-module-AuthModule-cf1ae2fd78b55c4f6343899c5721c2ea11f2a78f855db67c0dfe2aad74b92f4e0faa82e583482c8d4e3e89e008b9f4ef48d2c493c1b2b461244c83593af94e47"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-cf1ae2fd78b55c4f6343899c5721c2ea11f2a78f855db67c0dfe2aad74b92f4e0faa82e583482c8d4e3e89e008b9f4ef48d2c493c1b2b461244c83593af94e47"' :
                                        'id="xs-injectables-links-module-AuthModule-cf1ae2fd78b55c4f6343899c5721c2ea11f2a78f855db67c0dfe2aad74b92f4e0faa82e583482c8d4e3e89e008b9f4ef48d2c493c1b2b461244c83593af94e47"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserModule-96b0ef6fdf8036af145fa7676848be71a472b78f77f33a4b2bcb15fb87f98a48b17a35b8fa179ea98aa7a9d2e0ac6eff66039c94b41496052126a8f7a212ac16"' : 'data-target="#xs-controllers-links-module-UserModule-96b0ef6fdf8036af145fa7676848be71a472b78f77f33a4b2bcb15fb87f98a48b17a35b8fa179ea98aa7a9d2e0ac6eff66039c94b41496052126a8f7a212ac16"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-96b0ef6fdf8036af145fa7676848be71a472b78f77f33a4b2bcb15fb87f98a48b17a35b8fa179ea98aa7a9d2e0ac6eff66039c94b41496052126a8f7a212ac16"' :
                                            'id="xs-controllers-links-module-UserModule-96b0ef6fdf8036af145fa7676848be71a472b78f77f33a4b2bcb15fb87f98a48b17a35b8fa179ea98aa7a9d2e0ac6eff66039c94b41496052126a8f7a212ac16"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-96b0ef6fdf8036af145fa7676848be71a472b78f77f33a4b2bcb15fb87f98a48b17a35b8fa179ea98aa7a9d2e0ac6eff66039c94b41496052126a8f7a212ac16"' : 'data-target="#xs-injectables-links-module-UserModule-96b0ef6fdf8036af145fa7676848be71a472b78f77f33a4b2bcb15fb87f98a48b17a35b8fa179ea98aa7a9d2e0ac6eff66039c94b41496052126a8f7a212ac16"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-96b0ef6fdf8036af145fa7676848be71a472b78f77f33a4b2bcb15fb87f98a48b17a35b8fa179ea98aa7a9d2e0ac6eff66039c94b41496052126a8f7a212ac16"' :
                                        'id="xs-injectables-links-module-UserModule-96b0ef6fdf8036af145fa7676848be71a472b78f77f33a4b2bcb15fb87f98a48b17a35b8fa179ea98aa7a9d2e0ac6eff66039c94b41496052126a8f7a212ac16"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CredentialsDto.html" data-type="entity-link" >CredentialsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserRepository.html" data-type="entity-link" >UserRepository</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/RolesGuard.html" data-type="entity-link" >RolesGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise-inverted.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});