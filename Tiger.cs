using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Tiger : MonoBehaviour
{
    public float jump_power = 0;
    public float speed = 5f;
    public bool isGround = true;

    // Start is called before the first frame update
    void Start()
    {
        jump_power = 5.0f;
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetButtonDown("Jump") && isGround)
        {
            GetComponent<Rigidbody>().velocity = new Vector3(0, jump_power, 0);

            isGround = false;

        }
        if (Input.GetKey(KeyCode.LeftArrow))
        {
            transform.Translate(0, 0, speed * Time.deltaTime);
        }
        if (Input.GetKey(KeyCode.RightArrow))
        {
            transform.Translate(0, 0, -speed * Time.deltaTime);
        }
    }
    void OnCollisionEnter(Collision collision)
    {
        // 부딪힌 물체의 태그가 "Ground"라면
        if (collision.gameObject)
        {
            // isGround를 true로 변경
            isGround = true;
        }
    }
}
