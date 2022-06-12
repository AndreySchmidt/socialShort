import React from "react"
import { create } from "react-test-renderer"
import Status from "./../../modules/personalAccount/pages/UserPage/components/Status/Status"

describe(
  // {userId, status, getUserStatus, updateUserStatus}
  "comp Status", () => {
    test("str from status in the state", () => {
      const component = create(<Status userId = "22510" status = "Test status" />)
      const instance = component.getInstance()
      expect(instance.state.text).toBe("Test status")
    })
  }
)
