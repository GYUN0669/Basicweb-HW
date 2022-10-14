using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Object_Collision : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
     
    }

    void OnCollisionEnter(Collision collided)
    {
        this.GetComponent<AudioSource>().Play();
        Debug.Log(collided.gameObject.name);

    }
}
