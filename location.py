import psycopg2

conn = psycopg2.connect("postgresql://network_admin:saleh@localhost/network_inventory")
cur = conn.cursor()

print("Please enter device ID")
device_id = int(input())
cur.execute("""
    SELECT sites.name, tech.name 
    FROM sites, tech, devices
    WHERE devices.device_id=sites.site_id
        AND tech.tech_id=tech.tech_id
        AND device_id=%s
""", (device_id,));
for row in cur:
    site_name = row[1]
    tech_name = row[2]
    print(f"{site_name} , {tech_name}")
print(f"Installed at: {row[1]}")

cur.close()
conn.close()
