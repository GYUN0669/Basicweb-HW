using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class spawn : MonoBehaviour
{
    public GameObject pf_wall;
    public float interval = 1.5f;

    // Start is called before the first frame update
    IEnumerator Start()
    {
        while (true)
        {
            
            Instantiate(pf_wall, transform.position, transform.rotation);
            yield return new WaitForSeconds(Random.Range(1.0f,2.0f)); //벽이 생성되는 주기를 랜덤하게 변경
        }
    }

    // Update is called once per frame
    void Update()
    {
  
    }
}
