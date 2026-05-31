# UAT Checklist – Open Banking Consent Flow Explorer

## User Acceptance Test Cases

| Test Case                    | Expected Result                           | Status |
| ---------------------------- | ----------------------------------------- | ------ |
| Dashboard loads              | Dashboard renders without errors          | PASS   |
| Metrics load                 | Active, Revoked, Expired values displayed | PASS   |
| Scope chart renders          | Permission scope chart visible            | PASS   |
| Consent Flow Diagram renders | Flow visualization visible                | PASS   |
| Audit Log loads              | Consent records displayed                 | PASS   |
| Select Consent               | Sidebar updates with selected consent     | PASS   |
| Bank Filter                  | Audit Log updates correctly               | PASS   |
| Status Filter                | Audit Log updates correctly               | PASS   |
| Scope Filter                 | Audit Log updates correctly               | PASS   |
| Token Simulator              | Expiry calculations update                | PASS   |
| Revoke Consent               | Consent status changes to revoked         | PASS   |
| Metrics Update               | Metrics reflect revocation                | PASS   |
| JSON Download                | JSON file downloads successfully          | PASS   |
| Tooltips                     | Tooltips appear on hover                  | PASS   |
| Sidebar Intelligence         | Intelligence cards visible                | PASS   |

---

## Final Acceptance

All critical functionality has been tested and verified.

Result: PASS
