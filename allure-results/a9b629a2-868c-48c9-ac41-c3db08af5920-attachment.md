# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: datadriven.spec.js >> login
- Location: tests\datadriven.spec.js:3:5

# Error details

```
Error: locator.fill: value: expected string, got undefined
```

# Page snapshot

```yaml
- generic [ref=e13]:
  - generic [ref=e18]:
    - banner [ref=e19]:
      - generic [ref=e20]: Explore the things you love.
    - main [ref=e32]:
      - generic [ref=e40]:
        - generic [ref=e41]: Log in to Facebook
        - generic [ref=e52]:
          - generic [ref=e56]:
            - textbox "Email address or mobile number" [active] [ref=e57]
            - generic: Email address or mobile number
          - generic [ref=e61]:
            - textbox "Password" [ref=e62]
            - generic: Password
          - button "Log in" [ref=e65] [cursor=pointer]
          - link "Forgotten password?" [ref=e71] [cursor=pointer]:
            - /url: /recover/initiate/?privacy_mutation_token=eyJ0eXBlIjo1LCJjcmVhdGlvbl90aW1lIjoxNzk0ODkxMzczfQ%3D%3D&ars=facebook_login
          - link "Create new account" [ref=e77] [cursor=pointer]:
            - /url: /reg/?entry_point=login
          - img "Meta logo" [ref=e82]
  - separator [ref=e90]
  - contentinfo [ref=e92]:
    - generic [ref=e96]:
      - separator [ref=e98]
      - generic [ref=e103]:
        - generic [ref=e105]:
          - generic [ref=e106]: English (UK)
          - link "தமிழ்" [ref=e110] [cursor=pointer]:
            - /url: "#"
          - link "తెలుగు" [ref=e113] [cursor=pointer]:
            - /url: "#"
          - link "ಕನ್ನಡ" [ref=e116] [cursor=pointer]:
            - /url: "#"
          - link "اردو" [ref=e119] [cursor=pointer]:
            - /url: "#"
          - link "हिन्दी" [ref=e122] [cursor=pointer]:
            - /url: "#"
          - link "മലയാളം" [ref=e125] [cursor=pointer]:
            - /url: "#"
          - link "More languages…" [ref=e128] [cursor=pointer]:
            - /url: "#"
        - generic [ref=e131]:
          - link "Sign up" [ref=e134] [cursor=pointer]:
            - /url: https://www.facebook.com/reg/
          - link "Log in" [ref=e137] [cursor=pointer]:
            - /url: https://www.facebook.com/login/
          - link "Messenger" [ref=e140] [cursor=pointer]:
            - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fmessenger.com%2F&h=AUAOk15QT1NNGlPq1aDaLipZ5I-8BE7ItYEC0pAWS0lJrcuYIvpuDZVNnmlVrioyscB1fvx5wFNEEekru3-pag7oGu8bbCESwMVK4Wyp5Qh6wn-SGPF_fLtoNYsFb55Qok2MjfuvriXUSWXZRgTw7sFYYjDb_pUt6M32tg
          - link "Facebook Lite" [ref=e143] [cursor=pointer]:
            - /url: https://www.facebook.com/lite/
          - link "Video" [ref=e146] [cursor=pointer]:
            - /url: https://www.facebook.com/watch/
          - link "Meta Pay" [ref=e149] [cursor=pointer]:
            - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fabout.meta.com%2Ftechnologies%2Fmeta-pay&h=AUAOk15QT1NNGlPq1aDaLipZ5I-8BE7ItYEC0pAWS0lJrcuYIvpuDZVNnmlVrioyscB1fvx5wFNEEekru3-pag7oGu8bbCESwMVK4Wyp5Qh6wn-SGPF_fLtoNYsFb55Qok2MjfuvriXUSWXZRgTw7sFYYjDb_pUt6M32tg
          - link "Meta Store" [ref=e152] [cursor=pointer]:
            - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.meta.com%2F&h=AUAOk15QT1NNGlPq1aDaLipZ5I-8BE7ItYEC0pAWS0lJrcuYIvpuDZVNnmlVrioyscB1fvx5wFNEEekru3-pag7oGu8bbCESwMVK4Wyp5Qh6wn-SGPF_fLtoNYsFb55Qok2MjfuvriXUSWXZRgTw7sFYYjDb_pUt6M32tg
          - link "Meta Quest" [ref=e155] [cursor=pointer]:
            - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.meta.com%2Fquest%2F&h=AUAOk15QT1NNGlPq1aDaLipZ5I-8BE7ItYEC0pAWS0lJrcuYIvpuDZVNnmlVrioyscB1fvx5wFNEEekru3-pag7oGu8bbCESwMVK4Wyp5Qh6wn-SGPF_fLtoNYsFb55Qok2MjfuvriXUSWXZRgTw7sFYYjDb_pUt6M32tg
          - link "Ray-Ban Meta" [ref=e158] [cursor=pointer]:
            - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.meta.com%2Fai-glasses%2Fray-ban-meta%2F&h=AUAOk15QT1NNGlPq1aDaLipZ5I-8BE7ItYEC0pAWS0lJrcuYIvpuDZVNnmlVrioyscB1fvx5wFNEEekru3-pag7oGu8bbCESwMVK4Wyp5Qh6wn-SGPF_fLtoNYsFb55Qok2MjfuvriXUSWXZRgTw7sFYYjDb_pUt6M32tg
          - link "Meta AI" [ref=e161] [cursor=pointer]:
            - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.meta.ai%2F&h=AUAOk15QT1NNGlPq1aDaLipZ5I-8BE7ItYEC0pAWS0lJrcuYIvpuDZVNnmlVrioyscB1fvx5wFNEEekru3-pag7oGu8bbCESwMVK4Wyp5Qh6wn-SGPF_fLtoNYsFb55Qok2MjfuvriXUSWXZRgTw7sFYYjDb_pUt6M32tg
          - link "Muse" [ref=e164] [cursor=pointer]:
            - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fmuse.ai%2F&h=AUAOk15QT1NNGlPq1aDaLipZ5I-8BE7ItYEC0pAWS0lJrcuYIvpuDZVNnmlVrioyscB1fvx5wFNEEekru3-pag7oGu8bbCESwMVK4Wyp5Qh6wn-SGPF_fLtoNYsFb55Qok2MjfuvriXUSWXZRgTw7sFYYjDb_pUt6M32tg
          - link "Instagram" [ref=e167] [cursor=pointer]:
            - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2F&h=AUAOk15QT1NNGlPq1aDaLipZ5I-8BE7ItYEC0pAWS0lJrcuYIvpuDZVNnmlVrioyscB1fvx5wFNEEekru3-pag7oGu8bbCESwMVK4Wyp5Qh6wn-SGPF_fLtoNYsFb55Qok2MjfuvriXUSWXZRgTw7sFYYjDb_pUt6M32tg
          - link "Threads" [ref=e170] [cursor=pointer]:
            - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.threads.com%2F&h=AUAOk15QT1NNGlPq1aDaLipZ5I-8BE7ItYEC0pAWS0lJrcuYIvpuDZVNnmlVrioyscB1fvx5wFNEEekru3-pag7oGu8bbCESwMVK4Wyp5Qh6wn-SGPF_fLtoNYsFb55Qok2MjfuvriXUSWXZRgTw7sFYYjDb_pUt6M32tg
          - link "Privacy Policy" [ref=e173] [cursor=pointer]:
            - /url: https://www.facebook.com/privacy/policy/?entry_point=facebook_page_footer
          - link "Privacy Centre" [ref=e176] [cursor=pointer]:
            - /url: https://www.facebook.com/privacy/center/?entry_point=facebook_page_footer
          - link "About" [ref=e179] [cursor=pointer]:
            - /url: https://www.facebook.com/about/
          - link "Create ad" [ref=e182] [cursor=pointer]:
            - /url: https://www.facebook.com/ad_campaign/landing.php?placement=pflo&campaign_id=402047449186&nav_source=unknown&extra_1=auto
          - link "Create Page" [ref=e185] [cursor=pointer]:
            - /url: https://www.facebook.com/pages/create/?ref_type=site_footer
          - link "Developers" [ref=e188] [cursor=pointer]:
            - /url: https://developers.facebook.com/?ref=pf
          - link "Careers" [ref=e191] [cursor=pointer]:
            - /url: https://www.facebook.com/careers/?ref=pf
          - link "Cookies" [ref=e194] [cursor=pointer]:
            - /url: https://www.facebook.com/policies/cookies/
          - link "AdChoices" [ref=e197] [cursor=pointer]:
            - /url: https://www.facebook.com/help/568137493302217
          - link "Terms" [ref=e200] [cursor=pointer]:
            - /url: https://www.facebook.com/policies?ref=pf
          - link "Help" [ref=e203] [cursor=pointer]:
            - /url: https://www.facebook.com/help/?ref=pf
          - link "Contact uploading and non-users" [ref=e206] [cursor=pointer]:
            - /url: https://www.facebook.com/help/637205020878504
```

# Test source

```ts
  1 | import{test,expect} from "@playwright/test"
  2 | import Cred from'../Testdata/login.json'
  3 | test("login",async({page})=>{
  4 | await page.goto("https://www.facebook.com/")
> 5 | await page.locator("#_R_1h6kqsqppb6amH1_").fill(Cred.username)
    |                                            ^ Error: locator.fill: value: expected string, got undefined
  6 | await page.locator('[type="password"]').fill(Cred.Password)
  7 | await page.locator('[aria-label="Log in"]').click()
  8 | })
```