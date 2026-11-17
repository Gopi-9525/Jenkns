# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: task8frms.spec.js >> frame using framelocator
- Location: tests\task8frms.spec.js:2:5

# Error details

```
Error: locator.fill: Error: Selector "//div[@id="root"]/child::div" resolved to <div class="p-4 bg-white dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100">…</div>, <iframe> was expected
Call log:
  - waiting for locator('//iframe[@id="firstFr"]').contentFrame().locator('//div[@id="root"]/child::div').contentFrame().locator('//input[@name="email"]')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation "main navigation" [ref=e4]:
    - generic [ref=e5]:
      - link "LetCode Home" [ref=e6] [cursor=pointer]:
        - /url: /
        - img "LetCode" [ref=e7]
      - generic [ref=e8]:
        - link "Work-Space" [ref=e9] [cursor=pointer]:
          - /url: /test
        - generic [ref=e10]:
          - button "Products" [ref=e11] [cursor=pointer]
          - generic:
            - link "Ortoni Report":
              - /url: /product/ortoni-report
            - link "LetXPath":
              - /url: /product/letxpath
            - link "Playwright Runner":
              - /url: /product/playwright-runner
        - generic [ref=e15]:
          - button "Grooming" [ref=e16] [cursor=pointer]
          - generic:
            - link "Test Practice":
              - /url: /test-practice
            - link "Interview Q & A":
              - /url: /interview
            - link "Playwright Quiz":
              - /url: /pw-quiz
            - link "Resume Builder":
              - /url: /resume-builder
        - link "Courses" [ref=e20] [cursor=pointer]:
          - /url: /courses
        - link "Contact" [ref=e21] [cursor=pointer]:
          - /url: /contact
      - button "Switch to dark mode" [ref=e23] [cursor=pointer]
  - main [ref=e26]:
    - generic [ref=e28]:
      - generic [ref=e30]:
        - navigation "Breadcrumb" [ref=e31]:
          - link "Workspace" [ref=e32] [cursor=pointer]:
            - /url: /test
          - generic [ref=e41]: Frame
        - heading "Frame" [level=1] [ref=e44]
      - generic [ref=e46]:
        - generic [ref=e48]:
          - generic [ref=e49]: Let's go for a frame practice 😉
          - iframe [active] [ref=e51]:
            - generic [ref=f1e1]:
              - generic [ref=f1e4]:
                - heading "Enter Details" [level=1] [ref=f1e5]
                - generic [ref=f1e6]:
                  - generic [ref=f1e7]:
                    - generic [ref=f1e8]: First Name
                    - textbox "Enter name" [ref=f1e9]: Gopinath
                  - generic [ref=f1e10]:
                    - generic [ref=f1e11]: Last Name
                    - textbox "Enter email" [active] [ref=f1e12]: Nagarajan
                - paragraph [ref=f1e14]: You have entered Gopinath Nagarajan
                - iframe [ref=f1e16]:
                  - generic [ref=f5e1]:
                    - generic [ref=f5e5]:
                      - generic [ref=f5e6]: Email
                      - textbox "Enter email" [ref=f5e7]
                    - insertion [ref=f5e9]:
                      - iframe [ref=f5e11]:
                        - generic [ref=f8e1]:
                          - generic [ref=f8e7]:
                            - generic "USHA" [ref=f8e9]:
                              - link "Usha Fans with Copper Motor" [ref=f8e10] [cursor=pointer]:
                                - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=C77MOKAX8aqamAcvXk7QPnJatsQyQ5-j1igHiwY-qvxbb2R4QASDTkZYiYOWS6IPYDqABucihuUDIAQGpAqvvEpTu7UY-qAMByAPLBKoE5wFP0DIcGR_UjisAgVYTWpBiq-xlYhwBzKDejQeX04k5IY0BWpv9lvCVf18gNd-6u6yDAiRa6H2Cw1GRaSBOg8Rh26LBn45F4iYhDYqhyUkvRE-Kuc5N5764IPVohOCljLeX4pxyPipLUePRqg83zKmu99AfsehL-Luj8nXdRXCG9XVRECSzII90Nr_3wyHzM0nH7rW48-sguxPnmWTMMmUmk19X70A1mOwyTeMw7mhwyZsxw-5avK_s4CeT1RXw_BYntkM7AzF_9JFEDFZ4TPK8vgFybIzh5MxXwbLBxyQ6bhFEvWuvBk3ABI--uevwBYgFy6GM_lqAB7mA8pgbqAep67ECqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAf-6LECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAef4bECqAem67ECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBhIvf3BOlj3-7atwI6YA2ABsQmq5WQ-cX9bjIAKAZgLAcgLAaIMCyoGCgT28rECkAEBqg0CSU7IDQHqDRMI1N63rcCOmAMVy-uEAB0cSyvG8A0CiA4J2BMDiBQB0BUBmBYByhYCCgD4FgGAFwGyFwQYAVAGuhcCOAGyGAkSAuhZGAEiAQDQGAHCGQIIAQ&ae=1&gclid=EAIaIQobChMIptq3rcCOmAMVy-uEAB0cSyvGEAEYASAAEgIxI_D_BwE&num=1&cid=CAQSoAIAogo4dTsyineZwT-K3T_NRybhFes0sPaVUq8eBh7FLnvBAjRnIZHODEPEQXaf0Im9lYLXy_LppSz5NqJe8vm3xUegLOPZhsXGgMkyCqsN7NjaJCzn_3O1jcQSJ47MZ77DPInL9Sw9jG91wAnyys7d-qJdDLF-n_Rz0CJ99o0N74BTmyXlM3R2fWI6PvhABUjQpghfk7H0QTun51DR3WZQR78n-jsnQNT1RJMCU_FEh__G5XzgIqJ6ynilJxRYbk9awUsYWhrQGnwaUig0miQNvyYC8MU0ZwLrBzP_75h_mp2IPGD0vzQTA6s4axDFN-lM_qp5onRqSksFZQWg7I80MELO8qr0VbHSlSka6tpQHPqmbxoADzPI1KdEbCyzb3YYAQ&sig=AOD64_1nbq4eyHYPKRWNFh3R1u0Bxklpiw&rf=1&nb=0&adurl=https://www.ushafans.com/advantages-copper-motor%3Futm_source%3DCM_GDN%26utm_medium%3DCM_GDN%26utm_campaign%3DCM_GDN%26utm_id%3DCM_GDN%26utm_term%3DCM_GDN%26utm_content%3DCM_GDN%26gad_source%3D5%26gad_campaignid%3D24423633099%26gclid%3DEAIaIQobChMIptq3rcCOmAMVy-uEAB0cSyvGEAEYASAAEgIxI_D_BwE
                            - link [ref=f8e13] [cursor=pointer]:
                              - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=C77MOKAX8aqamAcvXk7QPnJatsQyQ5-j1igHiwY-qvxbb2R4QASDTkZYiYOWS6IPYDqABucihuUDIAQGpAqvvEpTu7UY-qAMByAPLBKoE5wFP0DIcGR_UjisAgVYTWpBiq-xlYhwBzKDejQeX04k5IY0BWpv9lvCVf18gNd-6u6yDAiRa6H2Cw1GRaSBOg8Rh26LBn45F4iYhDYqhyUkvRE-Kuc5N5764IPVohOCljLeX4pxyPipLUePRqg83zKmu99AfsehL-Luj8nXdRXCG9XVRECSzII90Nr_3wyHzM0nH7rW48-sguxPnmWTMMmUmk19X70A1mOwyTeMw7mhwyZsxw-5avK_s4CeT1RXw_BYntkM7AzF_9JFEDFZ4TPK8vgFybIzh5MxXwbLBxyQ6bhFEvWuvBk3ABI--uevwBYgFy6GM_lqAB7mA8pgbqAep67ECqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAf-6LECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAef4bECqAem67ECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBhIvf3BOlj3-7atwI6YA2ABsQmq5WQ-cX9bjIAKAZgLAcgLAaIMCyoGCgT28rECkAEBqg0CSU7IDQHqDRMI1N63rcCOmAMVy-uEAB0cSyvG8A0CiA4J2BMDiBQB0BUBmBYByhYCCgD4FgGAFwGyFwQYAVAGuhcCOAGyGAkSAuhZGAEiAQDQGAHCGQIIAQ&ae=1&gclid=EAIaIQobChMIptq3rcCOmAMVy-uEAB0cSyvGEAEYASAAEgIxI_D_BwE&num=1&cid=CAQSoAIAogo4dTsyineZwT-K3T_NRybhFes0sPaVUq8eBh7FLnvBAjRnIZHODEPEQXaf0Im9lYLXy_LppSz5NqJe8vm3xUegLOPZhsXGgMkyCqsN7NjaJCzn_3O1jcQSJ47MZ77DPInL9Sw9jG91wAnyys7d-qJdDLF-n_Rz0CJ99o0N74BTmyXlM3R2fWI6PvhABUjQpghfk7H0QTun51DR3WZQR78n-jsnQNT1RJMCU_FEh__G5XzgIqJ6ynilJxRYbk9awUsYWhrQGnwaUig0miQNvyYC8MU0ZwLrBzP_75h_mp2IPGD0vzQTA6s4axDFN-lM_qp5onRqSksFZQWg7I80MELO8qr0VbHSlSka6tpQHPqmbxoADzPI1KdEbCyzb3YYAQ&sig=AOD64_1nbq4eyHYPKRWNFh3R1u0Bxklpiw&rf=1&nb=7&adurl=https://www.ushafans.com/advantages-copper-motor%3Futm_source%3DCM_GDN%26utm_medium%3DCM_GDN%26utm_campaign%3DCM_GDN%26utm_id%3DCM_GDN%26utm_term%3DCM_GDN%26utm_content%3DCM_GDN%26gad_source%3D5%26gad_campaignid%3D24423633099%26gclid%3DEAIaIQobChMIptq3rcCOmAMVy-uEAB0cSyvGEAEYASAAEgIxI_D_BwE
                              - text: Explore the complete range of Usha fans featuring
                              - generic [ref=f8e14]: 100%copper motors
                              - text: .
                            - generic "USHA" [ref=f8e15]:
                              - link "USHA" [ref=f8e16] [cursor=pointer]:
                                - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=C77MOKAX8aqamAcvXk7QPnJatsQyQ5-j1igHiwY-qvxbb2R4QASDTkZYiYOWS6IPYDqABucihuUDIAQGpAqvvEpTu7UY-qAMByAPLBKoE5wFP0DIcGR_UjisAgVYTWpBiq-xlYhwBzKDejQeX04k5IY0BWpv9lvCVf18gNd-6u6yDAiRa6H2Cw1GRaSBOg8Rh26LBn45F4iYhDYqhyUkvRE-Kuc5N5764IPVohOCljLeX4pxyPipLUePRqg83zKmu99AfsehL-Luj8nXdRXCG9XVRECSzII90Nr_3wyHzM0nH7rW48-sguxPnmWTMMmUmk19X70A1mOwyTeMw7mhwyZsxw-5avK_s4CeT1RXw_BYntkM7AzF_9JFEDFZ4TPK8vgFybIzh5MxXwbLBxyQ6bhFEvWuvBk3ABI--uevwBYgFy6GM_lqAB7mA8pgbqAep67ECqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAf-6LECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAef4bECqAem67ECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBhIvf3BOlj3-7atwI6YA2ABsQmq5WQ-cX9bjIAKAZgLAcgLAaIMCyoGCgT28rECkAEBqg0CSU7IDQHqDRMI1N63rcCOmAMVy-uEAB0cSyvG8A0CiA4J2BMDiBQB0BUBmBYByhYCCgD4FgGAFwGyFwQYAVAGuhcCOAGyGAkSAuhZGAEiAQDQGAHCGQIIAQ&ae=1&gclid=EAIaIQobChMIptq3rcCOmAMVy-uEAB0cSyvGEAEYASAAEgIxI_D_BwE&num=1&cid=CAQSoAIAogo4dTsyineZwT-K3T_NRybhFes0sPaVUq8eBh7FLnvBAjRnIZHODEPEQXaf0Im9lYLXy_LppSz5NqJe8vm3xUegLOPZhsXGgMkyCqsN7NjaJCzn_3O1jcQSJ47MZ77DPInL9Sw9jG91wAnyys7d-qJdDLF-n_Rz0CJ99o0N74BTmyXlM3R2fWI6PvhABUjQpghfk7H0QTun51DR3WZQR78n-jsnQNT1RJMCU_FEh__G5XzgIqJ6ynilJxRYbk9awUsYWhrQGnwaUig0miQNvyYC8MU0ZwLrBzP_75h_mp2IPGD0vzQTA6s4axDFN-lM_qp5onRqSksFZQWg7I80MELO8qr0VbHSlSka6tpQHPqmbxoADzPI1KdEbCyzb3YYAQ&sig=AOD64_1nbq4eyHYPKRWNFh3R1u0Bxklpiw&rf=1&nb=1&adurl=https://www.ushafans.com/advantages-copper-motor%3Futm_source%3DCM_GDN%26utm_medium%3DCM_GDN%26utm_campaign%3DCM_GDN%26utm_id%3DCM_GDN%26utm_term%3DCM_GDN%26utm_content%3DCM_GDN%26gad_source%3D5%26gad_campaignid%3D24423633099%26gclid%3DEAIaIQobChMIptq3rcCOmAMVy-uEAB0cSyvGEAEYASAAEgIxI_D_BwE
                            - link "Learn More" [ref=f8e18] [cursor=pointer]:
                              - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=C77MOKAX8aqamAcvXk7QPnJatsQyQ5-j1igHiwY-qvxbb2R4QASDTkZYiYOWS6IPYDqABucihuUDIAQGpAqvvEpTu7UY-qAMByAPLBKoE5wFP0DIcGR_UjisAgVYTWpBiq-xlYhwBzKDejQeX04k5IY0BWpv9lvCVf18gNd-6u6yDAiRa6H2Cw1GRaSBOg8Rh26LBn45F4iYhDYqhyUkvRE-Kuc5N5764IPVohOCljLeX4pxyPipLUePRqg83zKmu99AfsehL-Luj8nXdRXCG9XVRECSzII90Nr_3wyHzM0nH7rW48-sguxPnmWTMMmUmk19X70A1mOwyTeMw7mhwyZsxw-5avK_s4CeT1RXw_BYntkM7AzF_9JFEDFZ4TPK8vgFybIzh5MxXwbLBxyQ6bhFEvWuvBk3ABI--uevwBYgFy6GM_lqAB7mA8pgbqAep67ECqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAf-6LECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAef4bECqAem67ECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBhIvf3BOlj3-7atwI6YA2ABsQmq5WQ-cX9bjIAKAZgLAcgLAaIMCyoGCgT28rECkAEBqg0CSU7IDQHqDRMI1N63rcCOmAMVy-uEAB0cSyvG8A0CiA4J2BMDiBQB0BUBmBYByhYCCgD4FgGAFwGyFwQYAVAGuhcCOAGyGAkSAuhZGAEiAQDQGAHCGQIIAQ&ae=1&gclid=EAIaIQobChMIptq3rcCOmAMVy-uEAB0cSyvGEAEYASAAEgIxI_D_BwE&num=1&cid=CAQSoAIAogo4dTsyineZwT-K3T_NRybhFes0sPaVUq8eBh7FLnvBAjRnIZHODEPEQXaf0Im9lYLXy_LppSz5NqJe8vm3xUegLOPZhsXGgMkyCqsN7NjaJCzn_3O1jcQSJ47MZ77DPInL9Sw9jG91wAnyys7d-qJdDLF-n_Rz0CJ99o0N74BTmyXlM3R2fWI6PvhABUjQpghfk7H0QTun51DR3WZQR78n-jsnQNT1RJMCU_FEh__G5XzgIqJ6ynilJxRYbk9awUsYWhrQGnwaUig0miQNvyYC8MU0ZwLrBzP_75h_mp2IPGD0vzQTA6s4axDFN-lM_qp5onRqSksFZQWg7I80MELO8qr0VbHSlSka6tpQHPqmbxoADzPI1KdEbCyzb3YYAQ&sig=AOD64_1nbq4eyHYPKRWNFh3R1u0Bxklpiw&rf=1&nb=8&adurl=https://www.ushafans.com/advantages-copper-motor%3Futm_source%3DCM_GDN%26utm_medium%3DCM_GDN%26utm_campaign%3DCM_GDN%26utm_id%3DCM_GDN%26utm_term%3DCM_GDN%26utm_content%3DCM_GDN%26gad_source%3D5%26gad_campaignid%3D24423633099%26gclid%3DEAIaIQobChMIptq3rcCOmAMVy-uEAB0cSyvGEAEYASAAEgIxI_D_BwE
                          - generic [ref=f8e26] [cursor=pointer]
                          - button [ref=f8e31] [cursor=pointer]
                          - iframe
              - insertion [ref=f1e18]:
                - generic [ref=f1e21]:
                  - heading "These are topics related to the article that might interest you" [level=2] [ref=f1e23]: Discover more
                  - link "LeetCode Work-Space" [ref=f1e24] [cursor=pointer]
                  - link "Problem solving tools" [ref=f1e29] [cursor=pointer]
                  - link "Playwright automation tools" [ref=f1e34] [cursor=pointer]
        - generic [ref=e53]:
          - heading "Learning Points" [level=3] [ref=e58]
          - list [ref=e59]:
            - listitem [ref=e60]:
              - generic [ref=e64]: Target Locator
            - listitem [ref=e65]:
              - generic [ref=e69]: switchTo()
            - listitem [ref=e70]:
              - generic [ref=e74]: defaultContent()
            - listitem [ref=e75]:
              - generic [ref=e79]: parentFrame()
            - listitem [ref=e80]:
              - generic [ref=e84]:
                - text: Overloading concept -
                - link "JAVA" [ref=e85] [cursor=pointer]:
                  - /url: "#"
          - generic [ref=e88]:
            - link "Watch Tutorial" [ref=e89] [cursor=pointer]:
              - /url: /video/frame
            - generic [ref=e93]:
              - text: "Practice ID:"
              - code [ref=e94]: frame
        - insertion [ref=e98]
      - insertion [ref=e102]
  - contentinfo [ref=e103]:
    - generic [ref=e104]:
      - paragraph [ref=e105]:
        - text: © 2026 LetCode ·
        - link "Koushik Chatterjee" [ref=e106] [cursor=pointer]:
          - /url: https://www.linkedin.com/in/ortoni/
        - text: "&"
        - link "Bollineni Yaswanth" [ref=e107] [cursor=pointer]:
          - /url: https://www.linkedin.com/in/bollineni-lakshmi-yaswanth-14472a199
        - link "Coding practice platform" [ref=e108] [cursor=pointer]
      - generic [ref=e112]:
        - link "GitHub" [ref=e113] [cursor=pointer]:
          - /url: https://github.com/ortoniKC
        - link "YouTube" [ref=e117] [cursor=pointer]:
          - /url: https://www.youtube.com/@letcode
        - link "LinkedIn" [ref=e121] [cursor=pointer]:
          - /url: https://www.linkedin.com/in/ortoni/
        - link "Contact" [ref=e127] [cursor=pointer]:
          - /url: /contact
        - link "🍕 Support" [ref=e128] [cursor=pointer]:
          - /url: https://buymeacoffee.com/letcode
```

# Test source

```ts
  1  | import{test,expect} from "@playwright/test"
  2  | test("frame using framelocator",async({page})=>{
  3  |     await page.goto("https://letcode.in/frame")
  4  |     const frame=await page.frameLocator('//iframe[@id="firstFr"]')
  5  |     await frame.locator('//input[@name="fname"]').fill("Gopinath")
  6  |     await frame.locator('//input[@name="lname"]').fill("Nagarajan")
  7  |     const nestedframe= frame.frameLocator('//div[@id="root"]/child::div')
> 8  |     await nestedframe.locator('//input[@name="email"]').fill("gopi@gmail.com")
     |                                                         ^ Error: locator.fill: Error: Selector "//div[@id="root"]/child::div" resolved to <div class="p-4 bg-white dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100">…</div>, <iframe> was expected
  9  |     
  10 |     //await page.pause()
  11 | })
```