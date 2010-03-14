require 'thor'

module Net
  class Io < Thor
    map "-s" => :setup
    desc "setup HOST COUCHAPP_NAME [HTPASSWD_REALM=administrator] [HTTPASSWD_PATH=htpasswd]", "Writes out all Configuration Templates"
    method_option :htpasswd_realm => "administrator", :htpasswd_path => "htpasswd"
    def setup host, couchapp_name 
      Dir["./**/*.erb"].each do |f|
        File.open(File.sub(f,".erb"),"wb") do |o|
          o.write ERB.new(File.read(f)).result(binding)
        end
      end
    end
  end

end
