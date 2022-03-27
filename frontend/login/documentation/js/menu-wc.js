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
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-e44f93d38ac8fe814cf47aa2759fa901a30dd1fda9078da920a85acdaef93226910d2698cb143ca4726f35ebf6ab425f92744925f9c9a2a06ed9c5b214a21e03"' : 'data-target="#xs-components-links-module-AppModule-e44f93d38ac8fe814cf47aa2759fa901a30dd1fda9078da920a85acdaef93226910d2698cb143ca4726f35ebf6ab425f92744925f9c9a2a06ed9c5b214a21e03"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-e44f93d38ac8fe814cf47aa2759fa901a30dd1fda9078da920a85acdaef93226910d2698cb143ca4726f35ebf6ab425f92744925f9c9a2a06ed9c5b214a21e03"' :
                                            'id="xs-components-links-module-AppModule-e44f93d38ac8fe814cf47aa2759fa901a30dd1fda9078da920a85acdaef93226910d2698cb143ca4726f35ebf6ab425f92744925f9c9a2a06ed9c5b214a21e03"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-d2e0628961fa078b079273e4b864b7bcd16def68a2da5dbf414dff57265bbd294a146d0577c41c91edeb6faa09fbdaa8d1e1b1fd57438b68c8d434c50aa41b13"' : 'data-target="#xs-components-links-module-SharedModule-d2e0628961fa078b079273e4b864b7bcd16def68a2da5dbf414dff57265bbd294a146d0577c41c91edeb6faa09fbdaa8d1e1b1fd57438b68c8d434c50aa41b13"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-d2e0628961fa078b079273e4b864b7bcd16def68a2da5dbf414dff57265bbd294a146d0577c41c91edeb6faa09fbdaa8d1e1b1fd57438b68c8d434c50aa41b13"' :
                                            'id="xs-components-links-module-SharedModule-d2e0628961fa078b079273e4b864b7bcd16def68a2da5dbf414dff57265bbd294a146d0577c41c91edeb6faa09fbdaa8d1e1b1fd57438b68c8d434c50aa41b13"' }>
                                            <li class="link">
                                                <a href="components/ErrorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ErrorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SharedModule-d2e0628961fa078b079273e4b864b7bcd16def68a2da5dbf414dff57265bbd294a146d0577c41c91edeb6faa09fbdaa8d1e1b1fd57438b68c8d434c50aa41b13"' : 'data-target="#xs-injectables-links-module-SharedModule-d2e0628961fa078b079273e4b864b7bcd16def68a2da5dbf414dff57265bbd294a146d0577c41c91edeb6faa09fbdaa8d1e1b1fd57438b68c8d434c50aa41b13"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SharedModule-d2e0628961fa078b079273e4b864b7bcd16def68a2da5dbf414dff57265bbd294a146d0577c41c91edeb6faa09fbdaa8d1e1b1fd57438b68c8d434c50aa41b13"' :
                                        'id="xs-injectables-links-module-SharedModule-d2e0628961fa078b079273e4b864b7bcd16def68a2da5dbf414dff57265bbd294a146d0577c41c91edeb6faa09fbdaa8d1e1b1fd57438b68c8d434c50aa41b13"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ViewsModule.html" data-type="entity-link" >ViewsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ViewsModule-796233e8157ae63a2a7db413ce40ad2e32fca74ff398e715594bf0ba665c0a6e47490bda722677f9c7fa3570866785fe00d5d40ebc1ec351676d87151010c8ac"' : 'data-target="#xs-components-links-module-ViewsModule-796233e8157ae63a2a7db413ce40ad2e32fca74ff398e715594bf0ba665c0a6e47490bda722677f9c7fa3570866785fe00d5d40ebc1ec351676d87151010c8ac"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ViewsModule-796233e8157ae63a2a7db413ce40ad2e32fca74ff398e715594bf0ba665c0a6e47490bda722677f9c7fa3570866785fe00d5d40ebc1ec351676d87151010c8ac"' :
                                            'id="xs-components-links-module-ViewsModule-796233e8157ae63a2a7db413ce40ad2e32fca74ff398e715594bf0ba665c0a6e47490bda722677f9c7fa3570866785fe00d5d40ebc1ec351676d87151010c8ac"' }>
                                            <li class="link">
                                                <a href="components/ContainerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContainerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreateUserFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateUserFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ViewsRoutingModule.html" data-type="entity-link" >ViewsRoutingModule</a>
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
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserCreation.html" data-type="entity-link" >UserCreation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserListItens.html" data-type="entity-link" >UserListItens</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserLogin.html" data-type="entity-link" >UserLogin</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserLoginResponse.html" data-type="entity-link" >UserLoginResponse</a>
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
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
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