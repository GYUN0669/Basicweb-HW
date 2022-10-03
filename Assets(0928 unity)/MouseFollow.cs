using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MouseFollow : MonoBehaviour
{
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
        Debug.Log(Input.mousePosition.x);
    }
}
