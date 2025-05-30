import type { FabricNamespace, renderTestType } from '../../../types';
import type { Canvas, BaseBrush } from 'fabric';
import { Point } from 'fabric';

function setBrush(canvas: Canvas, brush: BaseBrush): void {
  canvas.isDrawingMode = true;
  canvas.freeDrawingBrush = brush;
}

const pointerEventOptions = { e: { pointerId: 1 } } as any;

function pointDrawer(
  pointsToDraw: Point[],
  brush: BaseBrush,
  fireUp = false,
  onMove?: (point: Point, index: number, points: Point[]) => void,
): void {
  if (!brush.canvas) return;
  setBrush(brush.canvas, brush);
  brush.onMouseDown(pointsToDraw[0], pointerEventOptions);
  for (let i = 1; i < pointsToDraw.length; i++) {
    pointsToDraw[i].x = parseFloat(pointsToDraw[i].x as unknown as string);
    pointsToDraw[i].y = parseFloat(pointsToDraw[i].y as unknown as string);
    brush.onMouseMove(pointsToDraw[i], pointerEventOptions);
    if (onMove) {
      onMove(pointsToDraw[i], i, pointsToDraw);
    }
  }
  if (fireUp) {
    brush.onMouseUp(pointerEventOptions);
  }
}

function fireMouseUp(brush: BaseBrush): void {
  brush.onMouseUp(pointerEventOptions);
}

const BROWSER_SHADOW_BLUR_CONSTANTS: { [key: string]: number } = {
  chrome: 1.5,
  node: 1,
};

function getBrowserAgentForConfig(): string {
  if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
    return 'chrome';
  }
  return 'node';
}

function configureFabricForTest(fabric: FabricNamespace): void {
  const agent = getBrowserAgentForConfig();
  fabric.config.configure({
    browserShadowBlurConstant:
      BROWSER_SHADOW_BLUR_CONSTANTS[agent] ||
      BROWSER_SHADOW_BLUR_CONSTANTS.node,
    enableGLFiltering: false,
  });
  fabric.FabricObject.ownDefaults.objectCaching = true;
}

const freedrawPoints: Point[] = [
  { x: 24.9, y: 28.044 },
  { x: 23.904, y: 29.04 },
  { x: 23.904, y: 31.032 },
  { x: 25.896, y: 32.028 },
  { x: 27.888, y: 34.02 },
  { x: 29.88, y: 35.016 },
  { x: 32.869, y: 37.008 },
  { x: 35.857, y: 38.004 },
  { x: 38.845, y: 39.996 },
  { x: 41.833, y: 40.992 },
  { x: 45.817, y: 42.984 },
  {
    x: 49.801,
    y: 44.976,
  },
  { x: 52.789, y: 45.972 },
  { x: 57.769, y: 46.968 },
  { x: 60.757, y: 47.964 },
  { x: 62.749, y: 48.96 },
  { x: 66.733, y: 49.956 },
  { x: 68.725, y: 49.956 },
  { x: 71.713, y: 49.956 },
  {
    x: 73.705,
    y: 49.956,
  },
  { x: 75.697, y: 49.956 },
  { x: 77.689, y: 49.956 },
  { x: 79.681, y: 49.956 },
  { x: 81.673, y: 48.96 },
  { x: 82.669, y: 47.964 },
  { x: 83.665, y: 46.968 },
  { x: 84.661, y: 45.972 },
  { x: 85.657, y: 43.98 },
  { x: 85.657, y: 41.988 },
  { x: 84.661, y: 40.992 },
  { x: 83.665, y: 39.996 },
  {
    x: 81.673,
    y: 39.996,
  },
  { x: 79.681, y: 39.996 },
  { x: 77.689, y: 39.996 },
  { x: 75.697, y: 39.996 },
  {
    x: 73.705,
    y: 39.996,
  },
  { x: 72.709, y: 40.992 },
  { x: 72.709, y: 43.98 },
  { x: 72.709, y: 45.972 },
  { x: 72.709, y: 47.964 },
  { x: 72.709, y: 49.956 },
  { x: 72.709, y: 51.948 },
  { x: 72.709, y: 54.937 },
  {
    x: 73.705,
    y: 55.933,
  },
  { x: 74.701, y: 57.925 },
  { x: 76.693, y: 58.921 },
  { x: 77.689, y: 59.917 },
  {
    x: 79.681,
    y: 60.913,
  },
  { x: 81.673, y: 61.909 },
  { x: 83.665, y: 62.905 },
  { x: 85.657, y: 63.901 },
  {
    x: 87.649,
    y: 63.901,
  },
  { x: 90.637, y: 64.897 },
  { x: 92.629, y: 64.897 },
  { x: 94.622, y: 64.897 },
  {
    x: 96.614,
    y: 64.897,
  },
  { x: 98.606, y: 64.897 },
  { x: 100.598, y: 64.897 },
  { x: 102.59, y: 64.897 },
  {
    x: 105.578,
    y: 63.901,
  },
  { x: 106.574, y: 62.905 },
  { x: 108.566, y: 61.909 },
  { x: 109.562, y: 59.917 },
  {
    x: 110.558,
    y: 58.921,
  },
  { x: 111.554, y: 56.929 },
  { x: 113.546, y: 54.937 },
  { x: 113.546, y: 52.944 },
  {
    x: 114.542,
    y: 50.952,
  },
  { x: 115.538, y: 47.964 },
  { x: 115.538, y: 45.972 },
  { x: 115.538, y: 42.984 },
  {
    x: 115.538,
    y: 39.996,
  },
  { x: 115.538, y: 38.004 },
  { x: 114.542, y: 36.012 },
  { x: 113.546, y: 35.016 },
  {
    x: 112.55,
    y: 34.02,
  },
  { x: 111.554, y: 33.024 },
  { x: 109.562, y: 33.024 },
  { x: 107.57, y: 33.024 },
  {
    x: 107.57,
    y: 35.016,
  },
  { x: 107.57, y: 37.008 },
  { x: 108.566, y: 38.004 },
  { x: 109.562, y: 39 },
  { x: 110.558, y: 39.996 },
  { x: 112.55, y: 40.992 },
  { x: 115.538, y: 41.988 },
  { x: 118.526, y: 42.984 },
  {
    x: 121.514,
    y: 42.984,
  },
  { x: 123.506, y: 42.984 },
  { x: 125.498, y: 42.984 },
  { x: 128.486, y: 42.984 },
  {
    x: 130.478,
    y: 42.984,
  },
  { x: 132.47, y: 41.988 },
  { x: 133.466, y: 40.992 },
  { x: 134.462, y: 39.996 },
  {
    x: 135.458,
    y: 38.004,
  },
  { x: 135.458, y: 36.012 },
  { x: 135.458, y: 34.02 },
  { x: 135.458, y: 32.028 },
  {
    x: 134.462,
    y: 31.032,
  },
  { x: 133.466, y: 30.036 },
  { x: 132.47, y: 29.04 },
  { x: 131.474, y: 30.036 },
  {
    x: 130.478,
    y: 31.032,
  },
  { x: 130.478, y: 34.02 },
  { x: 129.482, y: 38.004 },
  { x: 129.482, y: 39.996 },
  {
    x: 128.486,
    y: 42.984,
  },
  { x: 128.486, y: 45.972 },
  { x: 128.486, y: 48.96 },
  { x: 128.486, y: 50.952 },
  {
    x: 128.486,
    y: 53.94,
  },
  { x: 128.486, y: 56.929 },
  { x: 128.486, y: 58.921 },
  { x: 128.486, y: 60.913 },
  {
    x: 128.486,
    y: 62.905,
  },
  { x: 128.486, y: 65.893 },
  { x: 129.482, y: 66.889 },
  { x: 129.482, y: 68.881 },
  {
    x: 131.474,
    y: 70.873,
  },
  { x: 131.474, y: 72.865 },
  { x: 132.47, y: 74.857 },
  { x: 134.462, y: 76.849 },
  {
    x: 134.462,
    y: 78.841,
  },
  { x: 135.458, y: 80.833 },
  { x: 136.454, y: 82.825 },
  { x: 137.45, y: 84.817 },
  {
    x: 138.446,
    y: 86.809,
  },
  { x: 138.446, y: 88.801 },
  { x: 137.45, y: 90.793 },
  { x: 134.462, y: 90.793 },
  {
    x: 132.47,
    y: 90.793,
  },
  { x: 129.482, y: 91.789 },
  { x: 127.49, y: 91.789 },
  { x: 124.502, y: 91.789 },
  {
    x: 120.518,
    y: 91.789,
  },
  { x: 117.53, y: 92.785 },
  { x: 114.542, y: 92.785 },
  { x: 110.558, y: 92.785 },
  {
    x: 106.574,
    y: 92.785,
  },
  { x: 102.59, y: 92.785 },
  { x: 99.602, y: 92.785 },
  { x: 95.618, y: 92.785 },
  {
    x: 91.633,
    y: 92.785,
  },
  { x: 88.645, y: 92.785 },
  { x: 84.661, y: 92.785 },
  { x: 82.669, y: 92.785 },
  {
    x: 79.681,
    y: 91.789,
  },
  { x: 77.689, y: 90.793 },
  { x: 74.701, y: 89.797 },
  { x: 72.709, y: 88.801 },
  {
    x: 70.717,
    y: 88.801,
  },
  { x: 67.729, y: 87.805 },
  { x: 66.733, y: 86.809 },
  { x: 64.741, y: 85.813 },
  {
    x: 61.753,
    y: 84.817,
  },
  { x: 59.761, y: 83.821 },
  { x: 57.769, y: 82.825 },
  { x: 55.777, y: 82.825 },
  {
    x: 53.785,
    y: 82.825,
  },
  { x: 51.793, y: 82.825 },
  { x: 48.805, y: 82.825 },
  { x: 46.813, y: 82.825 },
  {
    x: 43.825,
    y: 82.825,
  },
  { x: 41.833, y: 82.825 },
  { x: 39.841, y: 82.825 },
  { x: 37.849, y: 82.825 },
  {
    x: 35.857,
    y: 82.825,
  },
  { x: 34.861, y: 83.821 },
  { x: 33.865, y: 84.817 },
  { x: 32.869, y: 86.809 },
  {
    x: 32.869,
    y: 88.801,
  },
  { x: 31.873, y: 89.797 },
  { x: 31.873, y: 91.789 },
  { x: 31.873, y: 93.781 },
  {
    x: 30.876,
    y: 97.765,
  },
  { x: 30.876, y: 99.757 },
  { x: 30.876, y: 101.749 },
  { x: 30.876, y: 103.741 },
  {
    x: 30.876,
    y: 105.733,
  },
  { x: 30.876, y: 107.725 },
  { x: 30.876, y: 109.717 },
  { x: 30.876, y: 111.709 },
  {
    x: 31.873,
    y: 114.697,
  },
  { x: 32.869, y: 116.689 },
  { x: 34.861, y: 118.682 },
  { x: 35.857, y: 120.674 },
  {
    x: 37.849,
    y: 122.666,
  },
  { x: 39.841, y: 124.658 },
  { x: 41.833, y: 127.646 },
  { x: 42.829, y: 128.642 },
  {
    x: 44.821,
    y: 130.634,
  },
  { x: 46.813, y: 131.63 },
  { x: 48.805, y: 132.626 },
  { x: 50.797, y: 133.622 },
  {
    x: 52.789,
    y: 134.618,
  },
  { x: 54.781, y: 134.618 },
  { x: 56.773, y: 134.618 },
  { x: 58.765, y: 134.618 },
  {
    x: 59.761,
    y: 133.622,
  },
  { x: 61.753, y: 132.626 },
  { x: 63.745, y: 130.634 },
  { x: 64.741, y: 129.638 },
  {
    x: 65.737,
    y: 128.642,
  },
  { x: 66.733, y: 126.65 },
  { x: 68.725, y: 125.654 },
  { x: 69.721, y: 123.662 },
  {
    x: 71.713,
    y: 121.67,
  },
  { x: 72.709, y: 120.674 },
  { x: 73.705, y: 118.682 },
  { x: 74.701, y: 117.686 },
  {
    x: 76.693,
    y: 115.693,
  },
  { x: 77.689, y: 114.697 },
  { x: 78.685, y: 113.701 },
  { x: 80.677, y: 112.705 },
  {
    x: 82.669,
    y: 111.709,
  },
  { x: 84.661, y: 111.709 },
  { x: 86.653, y: 110.713 },
  { x: 88.645, y: 110.713 },
  {
    x: 90.637,
    y: 110.713,
  },
  { x: 93.625, y: 110.713 },
  { x: 97.61, y: 110.713 },
  { x: 100.598, y: 110.713 },
  {
    x: 102.59,
    y: 110.713,
  },
  { x: 105.578, y: 110.713 },
  { x: 108.566, y: 110.713 },
  { x: 110.558, y: 110.713 },
  {
    x: 113.546,
    y: 110.713,
  },
  { x: 116.534, y: 109.717 },
  { x: 120.518, y: 109.717 },
  { x: 122.51, y: 109.717 },
  {
    x: 124.502,
    y: 109.717,
  },
  { x: 126.494, y: 109.717 },
  { x: 127.49, y: 112.705 },
  { x: 127.49, y: 115.693 },
  {
    x: 128.486,
    y: 116.689,
  },
  { x: 128.486, y: 119.678 },
  { x: 128.486, y: 122.666 },
  { x: 128.486, y: 125.654 },
  {
    x: 128.486,
    y: 127.646,
  },
  { x: 127.49, y: 130.634 },
  { x: 126.494, y: 134.618 },
  { x: 124.502, y: 137.606 },
  {
    x: 122.51,
    y: 140.594,
  },
  { x: 121.514, y: 144.578 },
  { x: 118.526, y: 146.57 },
  { x: 116.534, y: 150.554 },
  {
    x: 114.542,
    y: 151.55,
  },
  { x: 111.554, y: 155.534 },
  { x: 109.562, y: 157.526 },
  { x: 107.57, y: 159.518 },
  {
    x: 105.578,
    y: 161.51,
  },
  { x: 103.586, y: 164.498 },
  { x: 101.594, y: 167.486 },
  { x: 100.598, y: 169.478 },
  {
    x: 99.602,
    y: 171.47,
  },
  { x: 98.606, y: 173.462 },
  { x: 96.614, y: 177.446 },
  { x: 96.614, y: 181.431 },
  {
    x: 95.618,
    y: 182.427,
  },
  { x: 95.618, y: 184.419 },
  { x: 95.618, y: 187.407 },
  { x: 95.618, y: 189.399 },
  {
    x: 95.618,
    y: 192.387,
  },
  { x: 96.614, y: 193.383 },
  { x: 97.61, y: 195.375 },
  { x: 98.606, y: 196.371 },
  {
    x: 99.602,
    y: 198.363,
  },
  { x: 100.598, y: 199.359 },
  { x: 101.594, y: 201.351 },
  { x: 102.59, y: 203.343 },
  {
    x: 102.59,
    y: 205.335,
  },
  { x: 102.59, y: 207.327 },
  { x: 102.59, y: 209.319 },
  { x: 99.602, y: 210.315 },
  {
    x: 97.61,
    y: 210.315,
  },
  { x: 95.618, y: 210.315 },
  { x: 93.625, y: 208.323 },
  { x: 91.633, y: 207.327 },
  {
    x: 89.641,
    y: 205.335,
  },
  { x: 88.645, y: 203.343 },
  { x: 86.653, y: 202.347 },
  { x: 85.657, y: 200.355 },
  {
    x: 82.669,
    y: 198.363,
  },
  { x: 81.673, y: 196.371 },
  { x: 77.689, y: 193.383 },
  { x: 76.693, y: 192.387 },
  {
    x: 74.701,
    y: 190.395,
  },
  { x: 71.713, y: 187.407 },
  { x: 68.725, y: 185.415 },
  { x: 66.733, y: 184.419 },
  {
    x: 64.741,
    y: 183.423,
  },
  { x: 62.749, y: 182.427 },
  { x: 61.753, y: 181.431 },
  { x: 59.761, y: 180.435 },
  {
    x: 57.769,
    y: 180.435,
  },
  { x: 56.773, y: 179.438 },
  { x: 56.773, y: 177.446 },
  { x: 56.773, y: 175.454 },
  {
    x: 55.777,
    y: 174.458,
  },
  { x: 55.777, y: 172.466 },
  { x: 54.781, y: 170.474 },
  { x: 54.781, y: 168.482 },
  {
    x: 53.785,
    y: 167.486,
  },
  { x: 52.789, y: 166.49 },
  { x: 51.793, y: 165.494 },
  { x: 49.801, y: 165.494 },
  {
    x: 47.809,
    y: 165.494,
  },
  { x: 45.817, y: 165.494 },
  { x: 42.829, y: 165.494 },
  { x: 40.837, y: 165.494 },
  {
    x: 38.845,
    y: 166.49,
  },
  { x: 36.853, y: 166.49 },
  { x: 35.857, y: 167.486 },
  { x: 34.861, y: 168.482 },
  {
    x: 33.865,
    y: 169.478,
  },
  { x: 32.869, y: 170.474 },
  { x: 31.873, y: 171.47 },
  { x: 31.873, y: 173.462 },
  {
    x: 31.873,
    y: 176.45,
  },
  { x: 31.873, y: 178.442 },
  { x: 31.873, y: 181.431 },
  { x: 32.869, y: 183.423 },
  {
    x: 33.865,
    y: 186.411,
  },
  { x: 34.861, y: 188.403 },
  { x: 34.861, y: 191.391 },
  { x: 35.857, y: 193.383 },
  {
    x: 35.857,
    y: 195.375,
  },
  { x: 35.857, y: 198.363 },
  { x: 35.857, y: 201.351 },
  { x: 35.857, y: 204.339 },
  {
    x: 35.857,
    y: 206.331,
  },
  { x: 35.857, y: 208.323 },
  { x: 34.861, y: 209.319 },
  { x: 33.865, y: 211.311 },
  {
    x: 32.869,
    y: 212.307,
  },
  { x: 31.873, y: 213.303 },
  { x: 30.876, y: 214.299 },
  { x: 32.869, y: 214.299 },
  {
    x: 33.865,
    y: 215.295,
  },
  { x: 35.857, y: 215.295 },
  { x: 38.845, y: 215.295 },
  { x: 41.833, y: 216.291 },
  {
    x: 44.821,
    y: 217.287,
  },
  { x: 47.809, y: 218.283 },
  { x: 51.793, y: 219.279 },
  { x: 55.777, y: 220.275 },
  {
    x: 56.773,
    y: 221.271,
  },
  { x: 59.761, y: 222.267 },
  { x: 62.749, y: 224.259 },
  { x: 64.741, y: 224.259 },
  {
    x: 65.737,
    y: 225.255,
  },
  { x: 66.733, y: 226.251 },
  { x: 68.725, y: 227.247 },
  { x: 69.721, y: 228.243 },
  {
    x: 71.713,
    y: 229.239,
  },
  { x: 73.705, y: 229.239 },
  { x: 74.701, y: 230.235 },
  { x: 77.689, y: 231.231 },
  {
    x: 79.681,
    y: 232.227,
  },
  { x: 83.665, y: 232.227 },
  { x: 85.657, y: 233.223 },
  { x: 88.645, y: 233.223 },
  {
    x: 91.633,
    y: 234.219,
  },
  { x: 94.622, y: 234.219 },
  { x: 97.61, y: 234.219 },
  { x: 100.598, y: 234.219 },
  {
    x: 104.582,
    y: 234.219,
  },
  { x: 107.57, y: 234.219 },
  { x: 111.554, y: 234.219 },
  { x: 114.542, y: 234.219 },
  {
    x: 117.53,
    y: 234.219,
  },
  { x: 122.51, y: 234.219 },
  { x: 126.494, y: 234.219 },
  { x: 129.482, y: 234.219 },
  {
    x: 131.474,
    y: 233.223,
  },
  { x: 133.466, y: 233.223 },
  { x: 135.458, y: 232.227 },
  { x: 138.446, y: 230.235 },
  {
    x: 140.438,
    y: 228.243,
  },
  { x: 142.43, y: 227.247 },
  { x: 144.422, y: 225.255 },
  { x: 145.418, y: 222.267 },
  {
    x: 148.406,
    y: 220.275,
  },
  { x: 149.402, y: 217.287 },
  { x: 150.398, y: 215.295 },
  { x: 152.39, y: 213.303 },
  {
    x: 153.386,
    y: 211.311,
  },
  { x: 154.382, y: 208.323 },
  { x: 155.378, y: 206.331 },
  { x: 156.375, y: 205.335 },
  {
    x: 157.371,
    y: 204.339,
  },
  { x: 158.367, y: 202.347 },
  { x: 159.363, y: 201.351 },
  { x: 158.367, y: 199.359 },
  {
    x: 157.371,
    y: 198.363,
  },
  { x: 155.378, y: 197.367 },
  { x: 153.386, y: 196.371 },
  { x: 151.394, y: 195.375 },
  {
    x: 148.406,
    y: 193.383,
  },
  { x: 144.422, y: 192.387 },
  { x: 143.426, y: 191.391 },
  { x: 141.434, y: 190.395 },
  {
    x: 139.442,
    y: 189.399,
  },
  { x: 137.45, y: 188.403 },
  { x: 135.458, y: 187.407 },
  { x: 134.462, y: 186.411 },
  {
    x: 133.466,
    y: 185.415,
  },
  { x: 131.474, y: 184.419 },
  { x: 130.478, y: 183.423 },
  { x: 129.482, y: 182.427 },
  {
    x: 128.486,
    y: 181.431,
  },
  { x: 128.486, y: 179.438 },
  { x: 128.486, y: 177.446 },
  { x: 128.486, y: 175.454 },
  {
    x: 129.482,
    y: 172.466,
  },
  { x: 130.478, y: 170.474 },
  { x: 131.474, y: 168.482 },
  { x: 133.466, y: 165.494 },
  {
    x: 135.458,
    y: 163.502,
  },
  { x: 137.45, y: 160.514 },
  { x: 138.446, y: 159.518 },
  { x: 140.438, y: 157.526 },
  {
    x: 141.434,
    y: 155.534,
  },
  { x: 143.426, y: 153.542 },
  { x: 144.422, y: 151.55 },
  { x: 145.418, y: 149.558 },
  {
    x: 147.41,
    y: 147.566,
  },
  { x: 147.41, y: 145.574 },
  { x: 148.406, y: 144.578 },
  { x: 149.402, y: 142.586 },
  {
    x: 150.398,
    y: 139.598,
  },
  { x: 150.398, y: 136.61 },
  { x: 150.398, y: 134.618 },
  { x: 150.398, y: 131.63 },
  {
    x: 150.398,
    y: 128.642,
  },
  { x: 150.398, y: 125.654 },
  { x: 150.398, y: 123.662 },
  { x: 150.398, y: 121.67 },
  {
    x: 150.398,
    y: 119.678,
  },
  { x: 150.398, y: 116.689 },
  { x: 149.402, y: 115.693 },
  { x: 149.402, y: 113.701 },
  {
    x: 149.402,
    y: 111.709,
  },
  { x: 150.398, y: 109.717 },
  { x: 151.394, y: 108.721 },
  { x: 153.386, y: 106.729 },
  {
    x: 154.382,
    y: 103.741,
  },
  { x: 157.371, y: 100.753 },
  { x: 158.367, y: 99.757 },
  { x: 159.363, y: 97.765 },
  {
    x: 161.355,
    y: 94.777,
  },
  { x: 163.347, y: 92.785 },
  { x: 164.343, y: 91.789 },
  { x: 165.339, y: 89.797 },
  {
    x: 166.335,
    y: 86.809,
  },
  { x: 167.331, y: 84.817 },
  { x: 167.331, y: 82.825 },
  { x: 167.331, y: 80.833 },
  {
    x: 167.331,
    y: 78.841,
  },
  { x: 167.331, y: 76.849 },
  { x: 167.331, y: 74.857 },
  { x: 166.335, y: 72.865 },
  {
    x: 165.339,
    y: 71.869,
  },
  { x: 164.343, y: 70.873 },
  { x: 163.347, y: 68.881 },
  { x: 162.351, y: 67.885 },
  {
    x: 161.355,
    y: 66.889,
  },
  { x: 160.359, y: 65.893 },
  { x: 159.363, y: 64.897 },
  { x: 158.367, y: 63.901 },
  {
    x: 157.371,
    y: 62.905,
  },
  { x: 156.375, y: 61.909 },
  { x: 155.378, y: 60.913 },
  { x: 154.382, y: 59.917 },
  {
    x: 153.386,
    y: 58.921,
  },
  { x: 152.39, y: 57.925 },
  { x: 152.39, y: 55.933 },
  { x: 152.39, y: 53.94 },
  { x: 152.39, y: 51.948 },
  { x: 153.386, y: 49.956 },
  { x: 154.382, y: 48.96 },
  { x: 154.382, y: 46.968 },
  {
    x: 155.378,
    y: 45.972,
  },
  { x: 156.375, y: 44.976 },
  { x: 156.375, y: 42.984 },
  { x: 157.371, y: 41.988 },
  {
    x: 158.367,
    y: 39,
  },
  { x: 159.363, y: 37.008 },
  { x: 159.363, y: 35.016 },
  { x: 160.359, y: 33.024 },
  {
    x: 161.355,
    y: 31.032,
  },
  { x: 161.355, y: 29.04 },
  { x: 162.351, y: 27.048 },
  { x: 162.351, y: 25.056 },
  {
    x: 163.347,
    y: 24.06,
  },
  { x: 164.343, y: 23.064 },
].map((p: { x: number; y: number }) => new Point(p.x, p.y));

async function renderSimpleFreedrawing(
  canvas: Canvas,
  fabric: FabricNamespace,
): Promise<void> {
  configureFabricForTest(fabric);
  const brush = new fabric.PencilBrush(canvas);
  brush.color = 'red';
  brush.width = 2;
  pointDrawer(freedrawPoints, brush);
}

async function renderNoOffset(
  canvas: Canvas,
  fabric: FabricNamespace,
): Promise<void> {
  configureFabricForTest(fabric);
  const brush = new fabric.PencilBrush(canvas);
  brush.color = 'green';
  brush.width = 16;
  pointDrawer(freedrawPoints, brush);
}

async function renderWithShadow(
  canvas: Canvas,
  fabric: FabricNamespace,
): Promise<void> {
  configureFabricForTest(fabric);
  const brush = new fabric.PencilBrush(canvas);
  brush.color = 'blue';
  brush.shadow = new fabric.Shadow({
    blur: 10,
    color: 'red',
  } as any);
  brush.width = 6;
  pointDrawer(freedrawPoints, brush);
}

async function renderWithOpacity(
  canvas: Canvas,
  fabric: FabricNamespace,
): Promise<void> {
  configureFabricForTest(fabric);
  const brush = new fabric.PencilBrush(canvas);
  brush.color = 'rgba(255, 255, 0, 0.4)';
  brush.shadow = new fabric.Shadow({
    blur: 10,
    color: 'green',
  } as any);
  brush.width = 6;
  pointDrawer(freedrawPoints, brush, false);
}

async function renderFreedrawingWithDecimateToPoint(
  canvas: Canvas,
  fabric: FabricNamespace,
): Promise<void> {
  configureFabricForTest(fabric);
  const pointsForDot = [
    { x: 14.94, y: 18.084 },
    { x: 14.94, y: 18.084 },
    { x: 14.94, y: 18.084 },
  ].map((p) => new Point(p.x, p.y));
  const brush = new fabric.PencilBrush(canvas);
  brush.color = 'red';
  brush.width = 15;
  brush.decimate = 1;
  pointDrawer(pointsForDot, brush);
}

async function renderWithDecimation(
  canvas: Canvas,
  fabric: FabricNamespace,
): Promise<void> {
  configureFabricForTest(fabric);
  const brush = new fabric.PencilBrush(canvas);
  brush.color = 'red';
  brush.width = 8;
  pointDrawer(freedrawPoints, brush, true);
  brush.color = 'blue';
  brush.width = 2;
  brush.decimate = 7;
  pointDrawer(freedrawPoints, brush);
}

async function renderPatternBrush(
  canvas: Canvas,
  fabric: FabricNamespace,
): Promise<void> {
  configureFabricForTest(fabric);
  const brush = new fabric.PatternBrush(canvas);
  brush.color = 'red';
  brush.width = 20;
  pointDrawer(freedrawPoints, brush, true);
  brush.color = 'blue';
  brush.width = 15;
  brush.decimate = 7;
  pointDrawer(freedrawPoints, brush);
}

async function renderPatternFromSource(
  canvas: Canvas,
  fabric: FabricNamespace,
): Promise<void> {
  configureFabricForTest(fabric);
  const brush = new fabric.PatternBrush(canvas);
  brush.source = await globalThis.getImage(fabric, 'greyfloral.png');
  brush.color = 'red';
  brush.width = 25;
  pointDrawer(freedrawPoints, brush, true);
  brush.source = await globalThis.getImage(fabric, 'parrot.png');
  brush.width = 7;
  pointDrawer(freedrawPoints, brush);
}

async function renderWithText(
  canvas: Canvas,
  fabric: FabricNamespace,
): Promise<void> {
  configureFabricForTest(fabric);
  canvas.add(
    new fabric.IText(
      'This textbox should NOT\nclear the brush during rendering',
    ),
  );
  const brush = new fabric.PencilBrush(canvas);
  brush.color = 'red';
  brush.width = 25;
  pointDrawer(freedrawPoints, brush, false, (point, index, currentPoints) => {
    if (index === currentPoints.length - 1) {
      canvas.renderAll();
    }
  });
}

const baseTests: renderTestType[] = [
  {
    title: 'Simple free drawing',
    golden: 'freedrawing1.png',
    percentage: 0.09,
    size: [100, 100],
    renderFunction: renderSimpleFreedrawing,
  },
  {
    title: 'Simple free drawing, large brush no offset',
    golden: 'freedrawing2.png',
    percentage: 0.09,
    size: [200, 250],
    renderFunction: renderNoOffset,
  },
  {
    title: 'Simple free drawing, with shadow',
    golden: 'freedrawing3.png',
    percentage: 0.09,
    size: [200, 250],
    renderFunction: renderWithShadow,
  },
  {
    title: 'Simple free drawing, with opacity',
    golden: 'freedrawing4.png',
    percentage: 0.09,
    size: [200, 250],
    renderFunction: renderWithOpacity,
  },
  {
    title: 'Simple free drawing to dot',
    golden: 'freedrawing5.png',
    percentage: 0.09,
    size: [50, 50],
    renderFunction: renderFreedrawingWithDecimateToPoint,
  },
  {
    title: 'Simple free drawing, with high decimation',
    golden: 'freedrawing6.png',
    percentage: 0.09,
    size: [200, 250],
    renderFunction: renderWithDecimation,
  },
  {
    title: 'Pattern src from `getPatternSrc`',
    golden: 'freedrawingPattern.png',
    percentage: 0.09,
    size: [200, 250],
    renderFunction: renderPatternBrush,
  },
  {
    title: 'Pattern src from `source`',
    golden: 'freedrawingPatternSource.png',
    percentage: 0.09,
    size: [200, 250],
    renderFunction: renderPatternFromSource,
  },
  {
    title: 'textbox should not clear brush',
    golden: 'withText.png',
    percentage: 0.02,
    size: [200, 250],
    renderFunction: renderWithText,
  },
];

const createContextTests = (
  baseTest: renderTestType,
  contextTypes: string[],
): renderTestType[] => {
  return contextTypes.map((contextType) => {
    const test: renderTestType = { ...baseTest };
    test.snapshotSuffix = 'free-draw';
    test.title = `${baseTest.title} (${contextType} context)`;

    if (contextType === 'top' || contextType === 'main') {
      test.golden = `${contextType}_ctx_${baseTest.golden}`;
    } else if (contextType === 'mesh') {
      test.golden = `mesh_${baseTest.golden}`;
    } else if (contextType === 'result') {
      test.golden = baseTest.golden;
    } else {
      test.golden = `${contextType}_${baseTest.golden}`;
    }

    if (
      contextType === 'top' ||
      contextType === 'main' ||
      contextType === 'mesh'
    ) {
      test.disabled = 'node';
    }

    const originalRenderFunction = baseTest.renderFunction;

    test.renderFunction = async (canvas: Canvas, fabric: FabricNamespace) => {
      await originalRenderFunction(canvas, fabric);

      if (contextType === 'top') {
        return canvas.upperCanvasEl.toDataURL();
      } else if (contextType === 'main') {
        canvas.renderAll();
        return canvas.lowerCanvasEl.toDataURL();
      } else if (contextType === 'mesh') {
        canvas.renderAll();
        (canvas.contextContainer as CanvasRenderingContext2D).drawImage(
          canvas.upperCanvasEl,
          0,
          0,
        );
        return canvas.lowerCanvasEl.toDataURL();
      } else if (contextType === 'result') {
        if (canvas.freeDrawingBrush) {
          fireMouseUp(canvas.freeDrawingBrush);
        }
        canvas.renderAll();
        return canvas.lowerCanvasEl.toDataURL();
      } else {
        return canvas.toDataURL();
      }
    };
    return test;
  });
};

const testConfigurations: { [key: string]: string[] } = {
  'Simple free drawing': ['top', 'mesh', 'result'],
  'Simple free drawing, large brush no offset': ['top', 'mesh', 'result'],
  'Simple free drawing, with shadow': ['top', 'mesh', 'result'],
  'Simple free drawing, with opacity': ['top', 'mesh', 'result'],
  'Simple free drawing to dot': ['top', 'mesh', 'result'],
  'Simple free drawing, with high decimation': [
    'top',
    'main',
    'mesh',
    'result',
  ],
  'Pattern src from `getPatternSrc`': ['top', 'main', 'mesh', 'result'],
  'Pattern src from `source`': ['top', 'main', 'mesh', 'result'],
  'textbox should not clear brush': ['top', 'mesh'],
};

const freedrawTests: renderTestType[] = [];
baseTests.forEach((baseTest) => {
  const contextTypes = testConfigurations[baseTest.title] || ['mesh'];
  const testsForBase = createContextTests(baseTest, contextTypes);
  freedrawTests.push(...testsForBase);
});

export { freedrawTests };
