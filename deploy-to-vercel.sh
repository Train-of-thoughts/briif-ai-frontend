#!/bin/bash

# Script to login to GitHub with specific credentials, push to Vercel, and restore original credentials

# GitHub credentials
GITHUB_USERNAME="tot-tech-lead"
GITHUB_PASSWORD="!ThoughtOfTrain007"

# Store current Git credentials
CURRENT_USER=$(git config user.name)
CURRENT_EMAIL=$(git config user.email)
CURRENT_HELPER=$(git config --global credential.helper)

echo "Saving current Git credentials: $CURRENT_USER <$CURRENT_EMAIL>"

# Set new credentials for tot-tech-lead
echo "Setting tot-tech-lead credentials..."
git config user.name "tot-tech-lead"
git config user.email "tot-tech-lead@github.com"

# Configure Git to use the provided credentials
git config --global credential.helper "store --file=.git-credentials-temp"
echo "https://$GITHUB_USERNAME:$GITHUB_PASSWORD@github.com" > .git-credentials-temp

# Push to Vercel
echo "Pushing to Vercel..."
git push vercel

# Check if push was successful
if [ $? -eq 0 ]; then
    echo "Successfully pushed to Vercel"
else
    echo "Failed to push to Vercel"
fi

# Restore original credentials
echo "Restoring original Git credentials..."
git config user.name "$CURRENT_USER"
git config user.email "$CURRENT_EMAIL"

# Restore original credential helper
if [ -z "$CURRENT_HELPER" ]; then
    git config --global --unset credential.helper
else
    git config --global credential.helper "$CURRENT_HELPER"
fi

# Remove temporary credentials file
rm -f .git-credentials-temp

echo "Deployment process completed"
