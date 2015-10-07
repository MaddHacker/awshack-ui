#!/bin/bash
aws s3 sync . s3://reinvent-yeswecode --exclude=.git/* --exclude=.* --exclude=*.sh --profile=hack --delete --acl=public-read
