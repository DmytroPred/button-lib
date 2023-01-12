Installation: </br>
1. Download ngx-button-0.0.1.tgz file from library-tgz folder. </br>
2. Run 'npm install &lt;absolute path to ngx-button-0.0.1.tgz>' in your app directory terminal. </br>
Example:  </br>
```
npm install C:/Users/user/Downloads/ngx-button-0.0.1.tgz
```
3. Import NgxButtonModule module into your app.module.ts file and feature modules. </br>
```
@NgModule({
  imports: [ NgxButtonModule ]
})
export class AppModule { }
```
 
API </br>
[ngx-button] </br>
Note：ngx-button accepts all props which are supported by native button. </br>

```
Property	  Description                                                     	Type	                            Default
[disabled]	prevents a user from interacting with the button	                'true'	                            false	
ngxType	      can be set to primary dashed text link or omitted (meaning default)	'primary'|'destructive'|'secondary' -	
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
