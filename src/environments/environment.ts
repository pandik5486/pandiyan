// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  region: 'us-east-1',
  userPoolId: 'us-east-1_PWKnMxXon',
  userPoolWebClientId: '5pohlohjqq4k6k3ln5da8qtrvu',
   oauth: {
      domain: "https://pessms.auth.us-east-1.amazoncognito.com",
      scope: ["openid", "phone"],
      redirectSignIn: "https://main.d3d81k62ulaf6t.amplifyapp.com/sign-in",
      redirectSignOut: "http://localhost:8080",
      responseType: "code"
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/dist/zone-error';  // Included with Angular CLI.
