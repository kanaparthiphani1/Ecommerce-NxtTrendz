In this assignment let's build a **Nxt Trendz** App with Protected Route by
applying the concepts we have learned till now.

### Refer to image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-protected-route-output.gif" alt="nxt-trendz-protected-route-desktop-output" style="max-width:90%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

#### Design Files

<details close>
<summary>Click to view the Design Files</summary>

- [Extra Small (Size < 576px), Small (Size >= 576px), and Medium (Size >= 768px) - Login](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-authentication-sm-login-output-v2.png)
- [Extra Small (Size < 576px), Small (Size >= 576px), and Medium (Size >= 768px) - Login Error](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-authentication-sm-login-error-output-v2.png)
- [Extra Small (Size < 576px) and Small (Size >= 576px) - Home](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-authorisation-sm-home-output.png)
- [Extra Small (Size < 576px) and Small (Size >= 576px) - Products](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-authorisation-sm-products-output.png)
- [Extra Small (Size < 576px) and Small (Size >= 576px) - Cart](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-authorisation-sm-cart-output.png)

- [Large (Size >= 992px) and Extra Large (Size >= 1200px) - Login](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-authentication-lg-login-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Home](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-protected-route-lg-home-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Products](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-protected-route-lg-products-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Cart](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-protected-route-lg-cart-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Not Found](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-authentication-lg-not-found-output.png)

</details>

### Project Set Up Instructions

<details close>
<summary>Click to view the Set Up Instructions</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`

</details>

### Project Completion Instructions

<details close>
<summary>Click to view the Functionality to be added</summary>

#### Add Functionality

The app must have the following functionalities

- When an unauthenticated user tries to access the `HomeRoute`, `ProductsRoute`
  or `CartRoute` then the page should be redirected to the `LoginRoute` using
  the protected route.
- When an authenticated user tries to access the `HomeRoute`, `ProductsRoute` or
  `CartRoute` then the page should be navigated to the respective route using
  the protected route.

</details>

<details close>
<summary>Click to view the Example response</summary>

- Success response from the URL `https://apis.ccbp.in/login` will be

```json
{
  "jwt_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MTk2Mjg2MTN9.nZDlFsnSWArLKKeF0QbmdVfLgzUbx1BGJsqa2kc_21Y"
}
```

- Failure response from the URL `https://apis.ccbp.in/login` for an invalid
  username will be

```json
{
  "status_code": 404,
  "error_msg": "Username is not found"
}
```

</details>

<details close>
<summary>Click to view the Implementation Files</summary>

- Your task is to complete the implementation of

  - `src/App.js`
  - `src/components/ProtectedRoute/index.js`

</details>

> #### Important Note
>
> <details open>
> <summary>Click to view Important Note Points</summary>
>
> - `HomeRoute` should consist of "/" in URL path
> - `LoginRoute` should consist of "/login" in URL path
> - `ProductsRoute` should consist of "/products" in URL path
> - `CartRoute` should consist of "/cart" in URL path
> - No need to use the `BrowserRouter` in `App.js` as we have already included
>   in `index.js`
>
> - User credentials
>
>   ```
>    username: rahul
>    password: rahul@2021
>   ```
>
> - Access the error message for invalid requests with the key `error_msg`
> </details>

#### Font-families

- Roboto

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being
>   imported into the tests.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a
>   look at the Cheat Sheets.
