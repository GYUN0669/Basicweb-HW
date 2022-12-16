using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class tank_move : MonoBehaviour
{
    private float tank_speed = 5.0f;
    private float rot_speed = 120.0f;
    public float bullet_power = 600.0f;
    public GameObject turret;
    public Transform bullet;
    public GameObject barrel;

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        float distance_per_frame = tank_speed * Time.deltaTime;
        float degrees_per_frame = rot_speed * Time.deltaTime;

        float moving_velocity = Input.GetAxis("Vertical");
        float tank_angle = Input.GetAxis("Horizontal");
        float turret_angle = Input.GetAxis("TurretRotation");

        this.transform.Translate(Vector3.forward * moving_velocity * distance_per_frame);
        this.transform.Rotate(0.0f,tank_angle * degrees_per_frame,0.0f);
        turret.transform.Rotate(Vector3.up * turret_angle * degrees_per_frame * 0.5f);

        if (Input.GetButtonDown("Fire1"))
        {
            GameObject spawn_point = GameObject.Find("sp_bullet");
            Transform prefab_bullet = Instantiate(bullet, turret.transform.position, turret.transform.rotation);
            prefab_bullet.GetComponent<Rigidbody>().AddForce(barrel.transform.up * bullet_power);
        }
    }
}
