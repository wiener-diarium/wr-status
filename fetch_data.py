import os
import json
from transkribus_utils.transkribus_utils import ACDHTranskribusUtils


tr_user = os.environ.get("TR_USER")
tr_pw = os.environ.get("TR_PW")
client = ACDHTranskribusUtils(user=tr_user, password=tr_pw)

data = client.create_status_report("wrz__", transcription_threshold=20)

with open("data.json", "w") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)