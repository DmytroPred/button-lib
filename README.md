
download ngx-button folder in your application projects folder </br>
projects/ngx-button </br>

Usage </br>
Import the component modules you want to use into your app.module.ts file and feature modules. </br>

@NgModule({ </br>
  imports: [ NgxButtonModule ] </br>
}) </br>
export class AppModule { } </br>
</br>
 
API </br>
[ngx-button] </br>
Note：ngx-button is a Directive, it accepts all props which are supported by native button. </br>

To get a customized button, just set ngxType/ngxSize/disabled. </br>
```
Property	  Description                                                     	Type	                            Default
[disabled]	prevents a user from interacting with the button	                'true'	                            false	
ngxType	    can be set to primary dashed text link or omitted (meaning default)	'primary'|'dashed'|'secondary'	-	
```
Example: </br>
```
    <button ngx-button ngxType="destructive" [disabled]="true">button</button>
```
Example for button group:  </br>
```
    <ngx-button-group>
        <button ngx-button ngxType="primary">button</button>
        <button ngx-button ngxType="secondary" [disabled]="true"><p>&spades;</p><p>button</p></button>
        <button ngx-button ngxType="destructive">button</button>
    </ngx-button-group>
```
 </br>
# NgxButton </br>
 </br>
This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.0. </br>
 </br>
## Code scaffolding

Run `ng generate component component-name --project ngx-button` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project ngx-button`.
> Note: Don't forget to add `--project ngx-button` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build ngx-button` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build ngx-button`, go to the dist folder `cd dist/ngx-button` and run `npm publish`.

## Running unit tests

Run `ng test ngx-button` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
