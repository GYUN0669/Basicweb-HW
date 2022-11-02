using System.Collections;
using System.Collections.Generic;
using UnityEngine;


public class goal_control : MonoBehaviour
{   
    private bool is_collided = false;
    // Start is called before the first frame update
    void Start()
    {
        float rnd1 = Random.Range(5.0f, 10.0f);
        float rnd2 = Random.Range(-3.0f, 1.0f);
        this.transform.position += new Vector3(rnd1, rnd2, 0);

    }

    // Update is called once per frame
    void Update()
    {
     
    }
    void OnCollisionStay(Collision other)
    {
        this.is_collided = true;
        other.transform.GetComponent<Rigidbody>().constraints = RigidbodyConstraints.FreezeAll;
    }
    

    void OnGUI()
    {
        if (is_collided)
            GUI.Label(new Rect(Screen.width / 2 - 30, 80, 100, 20), "Success!!!");
    }
}
