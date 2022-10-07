using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class rigid_body : MonoBehaviour
{
    float power = 1000;

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if (Onput.Getkey(KeyCode.UpArrow))
            GetComponent<Rigidbody>().AddForce(Vector3.forward * power * Time.deltaTime);
        if (Onput.Getkey(KeyCode.DownArrow))
            GetComponent<Rigidbody>().AddForce(Vector3.back * power * Time.deltaTime);
        if (Onput.Getkey(KeyCode.LeftArrow))
            GetComponent<Rigidbody>().AddForce(Vector3.left * power * Time.deltaTime);
        if (Onput.Getkey(KeyCode.RightArrow))
            GetComponent<Rigidbody>().AddForce(Vector3.right * power * Time.deltaTime);
        if (Onput.Getkey(KeyCode.U))
            GetComponent<Rigidbody>().AddForce(Vector3.up * power * Time.deltaTime);
        if (Onput.Getkey(KeyCode.D))
            GetComponent<Rigidbody>().AddForce(Vector3.down * power * Time.deltaTime);
    }
}
