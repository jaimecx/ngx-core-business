import{k as s,aB as i,aw as e,ax as a,ay as c,az as l,aA as p}from"./angular-platform-Cx1L7wmy.js";import{M as u}from"./button-Yiz3maQU.js";import{M as d}from"./icon-DQTuCTWf.js";const m=`<div class="cmp-wrapper">
  <div>
    <mat-icon class="icon" [svgIcon]="errorIcon"></mat-icon>
  </div>
  <div class="messaje">{{message}}</div>
  @if (showActionButton) {
    <div class="action-container">
      <button color="primary" mat-stroked-button (click)="actionClick.emit()">
        @if (buttonIcon) {
          <mat-icon class="action-icon" [svgIcon]="buttonIcon"></mat-icon>
        }
        <span>{{buttonText}}</span>
      </button>
    </div>
  }
</div>
`,v=":host{z-index:200;background-color:#fafafa}.cmp-wrapper{text-align:center}.icon{color:#f44336;width:64px;height:64px}.messaje{display:inline-block;max-width:320px;margin-top:24px}.action-container{margin-top:48px}",h={0:"No se logró establecer conexión con el servidor",400:"El servidor no pudo procesar la petición",401:"Inicio de sesión requerido.",403:"Ud. No cuenta con los permisos necesarios para realizar acceder a está funcionalidad.",404:"Es servicio solicitado no existe.",500:"Ha ocurrido un error en nuestro servidor, por favor intente más tarde.",502:"No se recibio respuesta de servicio externo.",503:"Este servicio se encuentra temporalmente deshabilitado."};var o;let n=(o=class{constructor(){this.defaultErrorMessage="Ha ocurrido un error en nuestro servidor, por favor intente más tarde.",this.errorIcon="app:ha-cloud-error",this.buttonIcon="app:refresh",this.buttonText="Intentar nuevamente",this.showActionButton=!0,this.actionClick=new s}ngOnInit(){const t=this;if(t.message=h[t.status]||t.defaultErrorMessage,t.status===401){t.showActionButton=!1;return}t.status===403&&(t.showActionButton=!1)}},o.propDecorators={errorIcon:[{type:e}],buttonIcon:[{type:e}],buttonText:[{type:e}],status:[{type:e}],showActionButton:[{type:e}],actionClick:[{type:i}]},o);n=a([c({selector:"ngbiz-data-error-view",template:m,host:{class:"container-center info-view danger"},standalone:!1,styles:[v]})],n);let r=class{};r=a([l({declarations:[n],imports:[p,u,d],exports:[n]})],r);export{n as D,r as N};
