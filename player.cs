using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class player : MonoBehaviour
{
    public float jump_power=0;
    private float time=0; // 시간 변수 선언
    public Texture2D icon = null;

    // Start is called before the first frame update
    void Start()
    {
        jump_power = Random.Range(4.0f, 9.0f); //시작할때마다 점프력 랜덤 지정
    }

    // Update is called once per frame
    void Update()
    {
       // if (Input.GetButtonDown("Jump"))
        //    GetComponent<Rigidbody>().velocity = new Vector3(0, jump_power, 0); 

        if(Input.GetButton("Jump"))
            GetComponent<Rigidbody>().velocity = new Vector3(0, jump_power, 0); // 꾹 누르고 있을떄도 점프가 되게 변경함

        time += Time.deltaTime; // 시간
    }

    void OnCollisionEnter(Collision other)
    {
        Debug.Log("Hello");
        SceneManager.LoadScene("main_scene");
    }
    void OnGUI()
    {
        GUI.DrawTexture(new Rect(0, Screen.height - 64, 64, 64), icon );
        GUI.Label(new Rect(81, Screen.height - 40, 128, 32), time.ToString()); // 게임 진행 시간을 표시해줌.
        GUI.Label(new Rect(81, Screen.height - 80, 128, 72), jump_power.ToString()); // 게임 시작시 점프력을 표시해줌.
    }
}
