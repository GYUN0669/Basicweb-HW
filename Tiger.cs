using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class Tiger : MonoBehaviour
{
    public float jump_power = 0;
    public float speed = 2.5f;
    public bool isGround = true;
    private float time = 0; // 시간 변수 선언
    public Texture2D icon = null;
    public int jump = 0;

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
            this.GetComponent<AudioSource>().Play();
            isGround = false;
        }
        if (Input.GetKey(KeyCode.LeftArrow))
        {
            transform.Translate(-speed * Time.deltaTime, 0,0);
        }
        if (Input.GetKey(KeyCode.RightArrow))
        {
            transform.Translate(speed * Time.deltaTime, 0, 0);
        }
        if (Input.GetKeyDown(KeyCode.DownArrow))
        {
            SceneManager.LoadScene("Main");
        }

        time += Time.deltaTime;
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
    void OnGUI()
    {
        GUI.DrawTexture(new Rect(700, 0, 64, 64), icon);
        GUI.Label(new Rect(770, 10, 128, 32), "시간:");
        GUI.Label(new Rect(810, 10, 128, 32), time.ToString()); // 게임 진행 시간을 표시해줌.

    }
}
