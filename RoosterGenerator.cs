using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RoosterGenerator : MonoBehaviour
{
    private float currTime;
    public GameObject Monster;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        currTime += Time.deltaTime;
        if (currTime > 5)
        {
            // x,y,z 좌표값을 각각 다른 범위에서 랜덤하게 정해지도록 만들었다.
            float newX = Random.Range(-3f, 3f), newZ = Random.Range(0f, 5f);

            // 생성할 오브젝트를 불러온다.
            GameObject monster = Instantiate(Monster);

            // 불러온 오브젝트를 랜덤하게 생성한 좌표값으로 위치를 옮긴다.
            Monster.transform.position = new Vector3(newX, 0, newZ);

            // 시간을 0으로 되돌려주면, 5초마다 반복된다.
            currTime = 0;
        }
    }
}
