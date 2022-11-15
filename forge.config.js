module.exports = {
    // ...
    packagerConfig: {
      osxSign: {
        optionsForFile: (filePath) => {
          // Here, we keep it simple and return a single entitlements.plist file.
          // You can use this callback to map different sets of entitlements
          // to specific files in your packaged app.
          return {
            entitlements: './entitlements.plist'
          }
        }
      },
      osxNotarize: {
        tool: 'notarytool',
        appleId: process.env.APPLE_ID,
        appleIdPassword: process.env.APPLE_PASSWORD,
        teamId: "process.env.APPLE_TEAM_ID"
      }
    }
    // ...
  }