import psycopg2

conn = psycopg2.connect("postgresql://network_admin:saleh@localhost/network_inventory")
cur = conn.cursor()

print("Please enter device ID")
device_id = int(input())
cur.execute("""
    SELECT sites.name, tech.name,
    FROM locations, sites, tech
    WHERE locations.site_id=sites.site_id
        AND locations.tech_id=tech.tech_id
        AND device_id=%s
""", (device_id,));
for row in cur:
    site_name = row[1]
    tech_name = row[2]
    print(f"{site_name} , {tech_name}")
print(f"Installed at: {row[0]}")

cur.close()
conn.close()
