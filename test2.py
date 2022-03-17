import psycopg2

conn = psycopg2.connect("postgresql://network_admin:saleh@localhost/network_inventory")
cur = conn.cursor()

print("Please enter device ID")
device_id = int(input())
cur.execute("""
    SELECT sites.name, devices.product_des, tech.name 
    FROM sites, tech, devices
    WHERE device_id=%s
""", (device_id,));     
for row in cur:
    product_des = row[1]
    tech_name = row[2]
    print(f"{product_des} , {tech_name}")
print(f"Installed at: {row[0]}")

cur.close()
conn.close()
