using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class sphere_transform : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKey(KeyCode.S))
        {
            GameObject game_object = GameObject.Find("Cube") as GameObject;
            game_object.GetComponent<cube_script>().scale_up();
        }

        if (Input.GetKey(KeyCode.UpArrow))
            this.transform.Translate(Vector3.forward * 3.0f * Time.deltaTime);

        if (Input.GetKey(KeyCode.D))
        {
            GameObject game_object = GameObject.Find("Sphere") as GameObject;
            game_object.GetComponent<cube_script>().scale_up();
        }

        if (Input.GetKey(KeyCode.DownArrow))
            this.transform.Translate(Vector3.back * 3.0f * Time.deltaTime);
    }
}
