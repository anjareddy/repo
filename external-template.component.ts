import { Component } from '@angular/core'

@Component({
    selector: 'external-template',
    templateUrl:`./external-template.component.html`
})


export class ExternalTemplateComponent
{
    event = {
        id:1,
        name:'Angular Connect - EXTERNAL TEMPLATE COMPONENT',
        date: '9/26/2036',
        time: '10:00 am',
        price: 599.99,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        }
    }
}