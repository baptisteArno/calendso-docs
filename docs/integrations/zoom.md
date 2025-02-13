---
sidebar_position: 3
---

# Zoom

The Zoom integration automatically creates Zoom meetings for your bookings.

## Connecting your Zoom account
1. Go to the App Store page, and click the 'Add new integration' button.
2. Next to Zoom, go ahead and click the Add button.
3. You will now be taken to Zoom to sign into your account and authorise Cal.

## Disconnecting your Zoom account
1. Go to the App Store page, and click on your Zoom integration in the list.
2. On the right hand side, click the Delete App button.

This will remove the integration from Cal. Cal will not perform any actions on your account once the integration is removed. However, if you want to revoke Calendso's permissions from your Zoom account, perform the following steps:
1. Log into your Zoom account and navigate to the App Marketplace
2. Click Manage > Installed Apps or search for the Cal app
3. Click on the Cal app
4. Click Uninstall

## How we interact with your Zoom account
We only need the ability to create meetings, so when somebody books an event with you, Cal can communicate with Zoom and create the corresponding meeting.

## Setting up Zoom on your self-hosted instance
1. Open [Zoom Marketplace](https://marketplace.zoom.us/) and sign in with your Zoom account.
2. On the upper right, click "Develop" => "Build App".
3. On "OAuth", select "Create".
4. Name your App.
5. Choose "User-managed app" as the app type.
6. De-select the option to publish the app on the Zoom App Marketplace.
7. Click "Create".
8. Now copy the Client ID and Client Secret to your .env file into the `ZOOM_CLIENT_ID` and `ZOOM_CLIENT_SECRET` fields.
9. Set the Redirect URL for OAuth `<CALENDSO URL>/api/integrations/zoomvideo/callback` replacing CALENDSO URL with the URI at which your application runs.
10. Also add the redirect URL given above as an allowlist URL and enable "Subdomain check". Make sure it says "saved" below the form.
11. You don't need to provide basic information about your app. Instead click at "Scopes" and then at "+ Add Scopes". On the left, click the category "Meeting" and check the scope `meeting:write`.
12. Click "Done".
13. You're good to go. Now you can easily add your Zoom integration in the Cal settings.
