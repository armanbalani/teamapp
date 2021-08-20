require "shrine"
require "shrine/storage/file_system"

Shrine.plugin :infer_extension           # loads Active Record integration
Shrine.plugin :remote_url, max_size: 20.megabytes # enables retaining cached file across form redisplays