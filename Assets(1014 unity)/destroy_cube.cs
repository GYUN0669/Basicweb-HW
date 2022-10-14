using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class destroy_cube : MonoBehaviour
{
    GameObject game_object = null;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if(Input.GetMouseButtonDown(0))
        {
            game_object = GameObject.Find("Cube");
            Destroy(game_object);
        }
    }
}
