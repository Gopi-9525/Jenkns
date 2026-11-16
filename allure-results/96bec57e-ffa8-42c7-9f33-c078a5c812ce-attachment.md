# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: datadriven.spec.js >> login
- Location: tests\datadriven.spec.js:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#_R_1h6kqsqppb6amH1_')

```

# Page snapshot

```yaml
- generic [ref=e12]:
  - generic [ref=e17]:
    - generic [ref=e18]: Explore the things you love.
    - generic [ref=e39]:
      - generic [ref=e40]: Log in to Facebook
      - generic [ref=e51]:
        - generic [ref=e55]:
          - textbox "Email address or mobile number" [active] [ref=e56]
          - generic: Email address or mobile number
        - generic [ref=e60]:
          - textbox "Password" [ref=e61]
          - generic: Password
        - button "Log in" [ref=e64] [cursor=pointer]
        - link "Forgotten password?" [ref=e70] [cursor=pointer]:
          - /url: /recover/initiate/?privacy_mutation_token=eyJ0eXBlIjo1LCJjcmVhdGlvbl90aW1lIjoxNzkyNTk3ODQwfQ%3D%3D&ars=facebook_login
        - link "Create new account" [ref=e76] [cursor=pointer]:
          - /url: /reg/?entry_point=login
        - img "Meta logo" [ref=e81]
  - separator [ref=e89]
  - main [ref=e95]:
    - separator [ref=e97]
    - generic [ref=e102]:
      - generic [ref=e104]:
        - generic [ref=e105]: English (UK)
        - link "தமிழ்" [ref=e109] [cursor=pointer]:
          - /url: "#"
        - link "తెలుగు" [ref=e112] [cursor=pointer]:
          - /url: "#"
        - link "ಕನ್ನಡ" [ref=e115] [cursor=pointer]:
          - /url: "#"
        - link "اردو" [ref=e118] [cursor=pointer]:
          - /url: "#"
        - link "हिन्दी" [ref=e121] [cursor=pointer]:
          - /url: "#"
        - link "മലയാളം" [ref=e124] [cursor=pointer]:
          - /url: "#"
        - link "More languages…" [ref=e127] [cursor=pointer]:
          - /url: "#"
      - generic [ref=e130]:
        - link "Sign up" [ref=e133] [cursor=pointer]:
          - /url: https://www.facebook.com/reg/
        - link "Log in" [ref=e136] [cursor=pointer]:
          - /url: https://www.facebook.com/login/
        - link "Messenger" [ref=e139] [cursor=pointer]:
          - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fmessenger.com%2F&h=AUCZcb1N9jzJ4su9XSGrkopxS_GCxzGTQ05WPDidpcglJ9u-u2A4UkQntpPpI_alANdc4dIjmB0WuGso7S2BYhuhHczrxkWTKcC--2SpowAiecZ-EpC7fHE4ab3ht-rIoozpxS69XgEjGyP3VxC7UlmdgAArZ2ZjjMvaXw
        - link "Facebook Lite" [ref=e142] [cursor=pointer]:
          - /url: https://www.facebook.com/lite/
        - link "Video" [ref=e145] [cursor=pointer]:
          - /url: https://www.facebook.com/watch/
        - link "Meta Pay" [ref=e148] [cursor=pointer]:
          - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fabout.meta.com%2Ftechnologies%2Fmeta-pay&h=AUCZcb1N9jzJ4su9XSGrkopxS_GCxzGTQ05WPDidpcglJ9u-u2A4UkQntpPpI_alANdc4dIjmB0WuGso7S2BYhuhHczrxkWTKcC--2SpowAiecZ-EpC7fHE4ab3ht-rIoozpxS69XgEjGyP3VxC7UlmdgAArZ2ZjjMvaXw
        - link "Meta Store" [ref=e151] [cursor=pointer]:
          - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.meta.com%2F&h=AUCZcb1N9jzJ4su9XSGrkopxS_GCxzGTQ05WPDidpcglJ9u-u2A4UkQntpPpI_alANdc4dIjmB0WuGso7S2BYhuhHczrxkWTKcC--2SpowAiecZ-EpC7fHE4ab3ht-rIoozpxS69XgEjGyP3VxC7UlmdgAArZ2ZjjMvaXw
        - link "Meta Quest" [ref=e154] [cursor=pointer]:
          - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.meta.com%2Fquest%2F&h=AUCZcb1N9jzJ4su9XSGrkopxS_GCxzGTQ05WPDidpcglJ9u-u2A4UkQntpPpI_alANdc4dIjmB0WuGso7S2BYhuhHczrxkWTKcC--2SpowAiecZ-EpC7fHE4ab3ht-rIoozpxS69XgEjGyP3VxC7UlmdgAArZ2ZjjMvaXw
        - link "Ray-Ban Meta" [ref=e157] [cursor=pointer]:
          - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.meta.com%2Fai-glasses%2Fray-ban-meta%2F&h=AUCZcb1N9jzJ4su9XSGrkopxS_GCxzGTQ05WPDidpcglJ9u-u2A4UkQntpPpI_alANdc4dIjmB0WuGso7S2BYhuhHczrxkWTKcC--2SpowAiecZ-EpC7fHE4ab3ht-rIoozpxS69XgEjGyP3VxC7UlmdgAArZ2ZjjMvaXw
        - link "Meta AI" [ref=e160] [cursor=pointer]:
          - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.meta.ai%2F&h=AUCZcb1N9jzJ4su9XSGrkopxS_GCxzGTQ05WPDidpcglJ9u-u2A4UkQntpPpI_alANdc4dIjmB0WuGso7S2BYhuhHczrxkWTKcC--2SpowAiecZ-EpC7fHE4ab3ht-rIoozpxS69XgEjGyP3VxC7UlmdgAArZ2ZjjMvaXw
        - link "Muse" [ref=e163] [cursor=pointer]:
          - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fmuse.ai%2F&h=AUCZcb1N9jzJ4su9XSGrkopxS_GCxzGTQ05WPDidpcglJ9u-u2A4UkQntpPpI_alANdc4dIjmB0WuGso7S2BYhuhHczrxkWTKcC--2SpowAiecZ-EpC7fHE4ab3ht-rIoozpxS69XgEjGyP3VxC7UlmdgAArZ2ZjjMvaXw
        - link "Instagram" [ref=e166] [cursor=pointer]:
          - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2F&h=AUCZcb1N9jzJ4su9XSGrkopxS_GCxzGTQ05WPDidpcglJ9u-u2A4UkQntpPpI_alANdc4dIjmB0WuGso7S2BYhuhHczrxkWTKcC--2SpowAiecZ-EpC7fHE4ab3ht-rIoozpxS69XgEjGyP3VxC7UlmdgAArZ2ZjjMvaXw
        - link "Threads" [ref=e169] [cursor=pointer]:
          - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.threads.com%2F&h=AUCZcb1N9jzJ4su9XSGrkopxS_GCxzGTQ05WPDidpcglJ9u-u2A4UkQntpPpI_alANdc4dIjmB0WuGso7S2BYhuhHczrxkWTKcC--2SpowAiecZ-EpC7fHE4ab3ht-rIoozpxS69XgEjGyP3VxC7UlmdgAArZ2ZjjMvaXw
        - link "Privacy Policy" [ref=e172] [cursor=pointer]:
          - /url: https://www.facebook.com/privacy/policy/?entry_point=facebook_page_footer
        - link "Privacy Centre" [ref=e175] [cursor=pointer]:
          - /url: https://www.facebook.com/privacy/center/?entry_point=facebook_page_footer
        - link "About" [ref=e178] [cursor=pointer]:
          - /url: https://www.facebook.com/about/
        - link "Create ad" [ref=e181] [cursor=pointer]:
          - /url: https://www.facebook.com/ad_campaign/landing.php?placement=pflo&campaign_id=402047449186&nav_source=unknown&extra_1=auto
        - link "Create Page" [ref=e184] [cursor=pointer]:
          - /url: https://www.facebook.com/pages/create/?ref_type=site_footer
        - link "Developers" [ref=e187] [cursor=pointer]:
          - /url: https://developers.facebook.com/?ref=pf
        - link "Careers" [ref=e190] [cursor=pointer]:
          - /url: https://www.facebook.com/careers/?ref=pf
        - link "Cookies" [ref=e193] [cursor=pointer]:
          - /url: https://www.facebook.com/policies/cookies/
        - link "AdChoices" [ref=e196] [cursor=pointer]:
          - /url: https://www.facebook.com/help/568137493302217
        - link "Terms" [ref=e199] [cursor=pointer]:
          - /url: https://www.facebook.com/policies?ref=pf
        - link "Help" [ref=e202] [cursor=pointer]:
          - /url: https://www.facebook.com/help/?ref=pf
        - link "Contact uploading and non-users" [ref=e205] [cursor=pointer]:
          - /url: https://www.facebook.com/help/637205020878504
```

# Test source

```ts
  1 | import{test,expect} from "@playwright/test"
  2 | import Cred from'../Testdata/login.json'
  3 | test("login",async({page})=>{
  4 | await page.goto("https://www.facebook.com/")
> 5 | await page.locator("#_R_1h6kqsqppb6amH1_").fill(Cred.username)
    |                                            ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  6 | await page.locator('[type="password"]').fill(Cred.Password)
  7 | await page.locator('[aria-label="Log in"]').click()
  8 | })
```