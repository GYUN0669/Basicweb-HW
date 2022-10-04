// PacMan.cpp : 애플리케이션에 대한 진입점을 정의합니다.
//

#include "framework.h"
#include "PacMan.h"
#include <stdio.h>
#include <string.h>
#include <gl.h>
#include <glu.h>


#define IDT_TIMER	1

#define MAX_LOADSTRING 100

// 전역 변수:
HINSTANCE hInst;                                // 현재 인스턴스입니다.
WCHAR szTitle[MAX_LOADSTRING];             // 제목 표시줄 텍스트입니다.
WCHAR szWindowClass[MAX_LOADSTRING];            // 기본 창 클래스 이름입니다.

////////////////////// 
HDC hDeviceContext;								// current device context
HGLRC hRenderingContext;						// current rendering context

bool bSetupPixelFormat(HDC hdc);
void Resize(int width, int height);
void DrawScene(HDC MyDC);

void DrawScore(float posX, float posY);
void InitStage(void);
void DrawPacManRight(float centerX, float centerY);

float centerPos[2][2] = { { 0.0f, 0.0f }, { 0.2f, 0.2f } };
float moveDirection[2][2] = { { 0.05f, 0.0f }, { 0.0f, 0.05f } };


void DrawMaze(void);

float pacman_pos[2] = { 0.1f, 0.1f };
bool bRight = true;


bool items[10][10];
int num_items = 0, total_items = 0;

float wall_width = 0.2f;
bool maze[10][10] = { { 1, 0, 1, 1, 1, 1, 1, 1, 1, 1 },
                      { 1, 0, 0, 0, 0, 0, 0, 0, 0, 1 },
                      { 1, 1, 1, 1, 1, 1, 1, 1, 0, 1 },
                      { 1, 0, 0, 0, 0, 0, 0, 0, 0, 1 },
                      { 1, 0, 0, 0, 0, 0, 0, 0, 0, 1 },
                      { 1, 1, 1, 1, 1, 1, 1, 1, 0, 1 },
                      { 1, 0, 0, 0, 0, 0, 0, 0, 0, 1 },
                      { 1, 0, 1, 1, 1, 1, 1, 1, 1, 1 },
                      { 1, 0, 0, 0, 0, 0, 0, 0, 0, 1 },
                      { 1, 1, 1, 1, 1, 1, 1, 1, 0, 1 } };


GLubyte wall_pattern[] = { 0xff, 0xff, 0xff, 0xfe, 0xff, 0xff, 0xff, 0xfe,
                           0xff, 0xff, 0xff, 0xfe, 0xff, 0xff, 0xff, 0xfe,
                           0xff, 0xff, 0xff, 0xfe, 0xff, 0xff, 0xff, 0xfe,
                           0xff, 0xff, 0xff, 0xfe, 0xff, 0xff, 0xff, 0xfe,
                           0xff, 0xff, 0xff, 0xfe, 0xff, 0xff, 0xff, 0xfe,
                           0xff, 0xff, 0xff, 0xfe, 0xff, 0xff, 0xff, 0xfe,
                           0xff, 0xff, 0xff, 0xfe, 0xff, 0xff, 0xff, 0xfe,
                           0xff, 0xff, 0xff, 0xfe, 0x00, 0x00, 0x00, 0x00,
                           0xff, 0xfe, 0xff, 0xff, 0xff, 0xfe, 0xff, 0xff,
                           0xff, 0xfe, 0xff, 0xff, 0xff, 0xfe, 0xff, 0xff,
                           0xff, 0xfe, 0xff, 0xff, 0xff, 0xfe, 0xff, 0xff,
                           0xff, 0xfe, 0xff, 0xff, 0xff, 0xfe, 0xff, 0xff,
                           0xff, 0xfe, 0xff, 0xff, 0xff, 0xfe, 0xff, 0xff,
                           0xff, 0xfe, 0xff, 0xff, 0xff, 0xfe, 0xff, 0xff,
                           0xff, 0xfe, 0xff, 0xff, 0xff, 0xfe, 0xff, 0xff,
                           0xff, 0xfe, 0xff, 0xff, 0x00, 0x00, 0x00, 0x00 };


float pacman[32][2] = { { 0.1f, 0.0f }, { 0.09807f, 0.01951f },
                        { 0.09238f, 0.03826f }, { 0.08314f, 0.05555f },
                        { 0.07071f, 0.07071f }, { 0.05555f, 0.08314f },
                        { 0.03826f, 0.09238f }, { 0.01951f, 0.09807f },
                        { 0.0f, 0.1f }, { -0.01951f, 0.09807f },
                        { -0.03826f, 0.09238f }, { -0.05555f, 0.08314f },
                        { -0.07071f, 0.07071f }, { -0.08314f, 0.05555f },
                        { -0.09238f, 0.03826f }, { -0.09807f, 0.01951f },
                        { -0.1f, 0.0f }, { -0.09807f, -0.01951f },
                        { -0.09238f, -0.03826f }, { -0.08314f, -0.05555f },
                        { -0.07071f, -0.07071f }, { -0.05555f, -0.08314f },
                        { -0.03826f, -0.09238f }, { -0.01951f, -0.09807f },
                        { 0.0f, -0.1f }, { 0.01951f, -0.09807f },
                        { 0.03826f, -0.09238f }, { 0.05555f, -0.08314f },
                        { 0.07071f, -0.07071f }, { 0.08314f, -0.05555f },
                        { 0.09238f, -0.03826f }, { 0.09807f, -0.01951f } };


/////////////////////////////

// 이 코드 모듈에 포함된 함수의 선언을 전달합니다:
ATOM                MyRegisterClass(HINSTANCE hInstance);
BOOL                InitInstance(HINSTANCE, int);
LRESULT CALLBACK    WndProc(HWND, UINT, WPARAM, LPARAM);
INT_PTR CALLBACK    About(HWND, UINT, WPARAM, LPARAM);

int APIENTRY wWinMain(_In_ HINSTANCE hInstance,
                     _In_opt_ HINSTANCE hPrevInstance,
                     _In_ LPWSTR    lpCmdLine,
                     _In_ int       nCmdShow)
{
    UNREFERENCED_PARAMETER(hPrevInstance);
    UNREFERENCED_PARAMETER(lpCmdLine);

    // TODO: 여기에 코드를 입력합니다.

    // 전역 문자열을 초기화합니다.
    LoadStringW(hInstance, IDS_APP_TITLE, szTitle, MAX_LOADSTRING);
    LoadStringW(hInstance, IDC_PACMAN, szWindowClass, MAX_LOADSTRING);
    MyRegisterClass(hInstance);

    // 애플리케이션 초기화를 수행합니다:
    if (!InitInstance (hInstance, nCmdShow))
    {
        return FALSE;
    }

    HACCEL hAccelTable = LoadAccelerators(hInstance, MAKEINTRESOURCE(IDC_PACMAN));

    MSG msg;

    // 기본 메시지 루프입니다:
    while (GetMessage(&msg, nullptr, 0, 0))
    {
        if (!TranslateAccelerator(msg.hwnd, hAccelTable, &msg))
        {
            TranslateMessage(&msg);
            DispatchMessage(&msg);
        }
    }

    return (int) msg.wParam;
}



//
//  함수: MyRegisterClass()
//
//  용도: 창 클래스를 등록합니다.
//
ATOM MyRegisterClass(HINSTANCE hInstance)
{
    WNDCLASSEXW wcex;

    wcex.cbSize = sizeof(WNDCLASSEX);

    wcex.style          = CS_HREDRAW | CS_VREDRAW;
    wcex.lpfnWndProc    = WndProc;
    wcex.cbClsExtra     = 0;
    wcex.cbWndExtra     = 0;
    wcex.hInstance      = hInstance;
    wcex.hIcon          = LoadIcon(hInstance, MAKEINTRESOURCE(IDI_PACMAN));
    wcex.hCursor        = LoadCursor(nullptr, IDC_ARROW);
    wcex.hbrBackground  = (HBRUSH)(COLOR_WINDOW+1);
    wcex.lpszMenuName = 0; // MAKEINTRESOURCEW(IDC_PACMAN);
    wcex.lpszClassName  = szWindowClass;
    wcex.hIconSm        = LoadIcon(wcex.hInstance, MAKEINTRESOURCE(IDI_SMALL));

    return RegisterClassExW(&wcex);
}

//
//   함수: InitInstance(HINSTANCE, int)
//
//   용도: 인스턴스 핸들을 저장하고 주 창을 만듭니다.
//
//   주석:
//
//        이 함수를 통해 인스턴스 핸들을 전역 변수에 저장하고
//        주 프로그램 창을 만든 다음 표시합니다.
//
BOOL InitInstance(HINSTANCE hInstance, int nCmdShow)
{
   hInst = hInstance; // 인스턴스 핸들을 전역 변수에 저장합니다.

  
   HWND hWnd = CreateWindowW(szWindowClass, szTitle, WS_OVERLAPPEDWINDOW,
       CW_USEDEFAULT, 0, 800, 600, nullptr, nullptr, hInstance, nullptr);

   if (!hWnd)
   {
      return FALSE;
   }

   ShowWindow(hWnd, nCmdShow);
   UpdateWindow(hWnd);

   return TRUE;
}

//
//  함수: WndProc(HWND, UINT, WPARAM, LPARAM)
//
//  용도: 주 창의 메시지를 처리합니다.
//
//  WM_COMMAND  - 애플리케이션 메뉴를 처리합니다.
//  WM_PAINT    - 주 창을 그립니다.
//  WM_DESTROY  - 종료 메시지를 게시하고 반환합니다.
//
//
LRESULT CALLBACK WndProc(HWND hWnd, UINT message, WPARAM wParam, LPARAM lParam)
{
    RECT rect;

    switch (message)
    {
    case WM_CREATE:
        // Initialize for the OpenGL rendering
        hDeviceContext = GetDC(hWnd);
        if (!bSetupPixelFormat(hDeviceContext)) {
            MessageBox(hWnd, "Error in setting up pixel format for OpenGL", "Error", MB_OK | MB_ICONERROR);
            DestroyWindow(hWnd);
        }
        hRenderingContext = wglCreateContext(hDeviceContext);
        wglMakeCurrent(hDeviceContext, hRenderingContext);

        // Create a timer
        SetTimer(hWnd, IDT_TIMER, 50, NULL);

		//use font bitmaps
		SelectObject(hDeviceContext, GetStockObject(SYSTEM_FONT));
		wglUseFontBitmaps(hDeviceContext, 0, 255, 1000);
		glListBase(1000);

		InitStage();

         
        break;
        /*
    case WM_COMMAND:
        {
            int wmId = LOWORD(wParam);
            // 메뉴 선택을 구문 분석합니다:
            switch (wmId)
            {
            case IDM_ABOUT:
                DialogBox(hInst, MAKEINTRESOURCE(IDD_ABOUTBOX), hWnd, About);
                break;
            case IDM_EXIT:
                DestroyWindow(hWnd);
                break;
            default:
                return DefWindowProc(hWnd, message, wParam, lParam);
            }
        }
        break;
        */
    case WM_PAINT:
        {
            DrawScene(hDeviceContext);
            ValidateRect(hWnd, NULL);
        }
        break;

    case WM_SIZE:
        GetClientRect(hWnd, &rect);
        Resize(rect.right, rect.bottom);

        InvalidateRect(hWnd, NULL, false);

        break;

    case WM_DESTROY:
        if (hRenderingContext)
            wglDeleteContext(hRenderingContext);
        if (hDeviceContext)
            ReleaseDC(hWnd, hDeviceContext);

        // Destroy a timer
        KillTimer(hWnd, IDT_TIMER);

		//Use font bitmapps
		glDeleteLists(1000, 255);
      
        PostQuitMessage(0);
        break;

    case WM_TIMER:
        switch (wParam) {
        case IDT_TIMER:
            //DoCollide();
           
            InvalidateRect(hWnd, NULL, false);
            break;
        }
        break;

    case WM_KEYDOWN:
        
        if (wParam == VK_ESCAPE) {
        
                DestroyWindow(hWnd);
        }
        break;

    default:
        return DefWindowProc(hWnd, message, wParam, lParam);
    }
    return 0;
}

// 정보 대화 상자의 메시지 처리기입니다.
INT_PTR CALLBACK About(HWND hDlg, UINT message, WPARAM wParam, LPARAM lParam)
{
    UNREFERENCED_PARAMETER(lParam);
    switch (message)
    {
    case WM_INITDIALOG:
        return (INT_PTR)TRUE;

    case WM_COMMAND:
        if (LOWORD(wParam) == IDOK || LOWORD(wParam) == IDCANCEL)
        {
            EndDialog(hDlg, LOWORD(wParam));
            return (INT_PTR)TRUE;
        }
        break;
    }
    return (INT_PTR)FALSE;
}

bool bSetupPixelFormat(HDC hdc)
{
    PIXELFORMATDESCRIPTOR pfd;
    int pixelformat;

    pfd.nSize = sizeof(PIXELFORMATDESCRIPTOR);
    pfd.nVersion = 1;
    pfd.dwFlags = PFD_DRAW_TO_WINDOW | PFD_SUPPORT_OPENGL | PFD_DOUBLEBUFFER;
    pfd.dwLayerMask = PFD_MAIN_PLANE;
    pfd.iPixelType = PFD_TYPE_RGBA;
    pfd.cColorBits = 24;
    pfd.cDepthBits = 16;
    pfd.cAccumBits = 0;
    pfd.cStencilBits = 0;

    if ((pixelformat = ChoosePixelFormat(hdc, &pfd)) == 0) {
        MessageBox(NULL, "ChoosePixelFormat() failed!!!", "Error", MB_OK | MB_ICONERROR);
        return false;
    }

    if (SetPixelFormat(hdc, pixelformat, &pfd) == false) {
        MessageBox(NULL, "SetPixelFormat() failed!!!", "Error", MB_OK | MB_ICONERROR);
        return false;
    }

    return true;
}

void Resize(int width, int height)
{
    glMatrixMode(GL_PROJECTION);
    glLoadIdentity();

   int cx = width;
   int cy = height;
    glViewport(0, 0, cx, cy);

    // 3D orthographic viewing
    if (cx <= cy) {
        float ratio = (float)cy / (float)cx;
        glOrtho(-1.0, 1.0, -ratio, ratio, -1.0, 1.0);
    }
    else {
        float ratio = (float)cx / (float)cy;
        glOrtho(-ratio, ratio, -1.0, 1.0, -1.0, 1.0);
    }

    return;

}

void DrawScene(HDC MyDC)
{
    glEnable(GL_DEPTH_TEST);

    glClearColor(1.0f, 1.0f, 1.0f, 1.0f);
    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
    glMatrixMode(GL_MODELVIEW);
    glLoadIdentity();

    glColor3f(0.0f, 0.0f, 0.0f);
    DrawScore(1.1f, 0.7f);

    DrawPacManRight(pacman_pos[0], pacman_pos[1]);
	DrawMaze();
    
	SwapBuffers(MyDC);

    return;
}


void DrawMaze(void)
{
    glEnable(GL_POLYGON_STIPPLE);
    glPolygonStipple(wall_pattern);

    float x0 = -1.0f, y0 = 1.0f; // start from left-topA
    glColor3f(0.5f, 0.0f, 0.0f);
    for (int row = 0; row < 10; row++) {
        for (int col = 0; col < 10; col++) {
            if (maze[row][col]) {
                glRectf(x0, y0, x0 + wall_width, y0 - wall_width);
            }
            x0 += wall_width;
        }
        x0 = -1.0f;
        y0 -= wall_width;
    }

    glDisable(GL_POLYGON_STIPPLE);

    return;
}

void DrawScore(float posX, float posY)
{
   //use font bitmaps
	char str[256];
	sprintf_s(str, "Score: %2d", num_items);

	glRasterPos2f(posX, posY);
	glCallLists(strlen(str), GL_UNSIGNED_BYTE, str);

	glColor3f(0.75f, 0.75f, 0.75f);
	glRectf(posX - 0.02f, posY - 0.02f, posX + 0.23f, posY + 0.05f);

	return;
}

void InitStage(void)
{
    pacman_pos[0] = pacman_pos[1] = 0.1f;
   
    
    


    return;
}

void DrawPacManRight(float centerX, float centerY)
{
    glColor3f(0.0f, 0.0f, 0.0f);
    glBegin(GL_LINE_LOOP);
    glVertex2f(centerX, centerY);
    for (int i = 0; i < 30; i++)
        glVertex2f(centerX + pacman[i][0], centerY + pacman[i][1]);
    glEnd();

    glColor3f(1.0f, 1.0f, 0.0f);
    glBegin(GL_POLYGON);
    glVertex2f(centerX, centerY);
    for (int i = 0; i < 30; i++)
        glVertex2f(centerX + pacman[i][0], centerY + pacman[i][1]);
    glEnd();

    return;
}

void DrawGhost(void) {
	
}