using System.Collections;
using System.Collections.Generic;
using UnityEngine;


public class MouseFollow : MonoBehaviour
{
    float smooth = 10f;
    float tiltAngle = 60f;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        float halfW = Screen.width / 2f;
        float halfH = Screen.width / 3f;

        transform.position = new Vector3 ((Input.mousePosition.x - halfW)/halfW, 0, (Input.mousePosition.x - halfH) / halfH);

        float tiltAroundZ = Input.GetAxis("Mouse X") * tiltAngle * 2f;
        float tiltAroundX = Input.GetAxis("Mouse Y") * tiltAngle * -2f;

        var target = Quaternion.Euler(new Vector3(tiltAroundX, 0, tiltAroundZ));
        transform.rotation = Quaternion.Slerp(transform.rotation, target, Time.deltaTime * smooth);
    }
}
