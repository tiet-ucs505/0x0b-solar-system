class Experiment {
  // Candidate Details
  static rollNo = '10983743'
  static name = 'The Tutor'

  #gl
  #programs=[]

  canvasSel = '#myCanvas'
  controls

  constructor() {
    const Cls = this.constructor

    this.controls
      = new Controls('#controls', {
	submitSel: '#controls-submit'
      })

    // const handleCamera = this.handleCamera.bind(this)
    // this.cameraControls.el.addEventListener(
    //   'update', handleCamera
    // )
    // this.cameraControls.el.addEventListener(
    //   'submit', handleCamera
    // )

    // Uncomment to enable tranform controls
    // --------------------------------------------------
    this.controls.unhide()

    const {inputs} = this.controls
    console.log({inputs})
  }

  async setupPrograms(gl) {
    this.#gl = gl
    const Cls = this.constructor

    // ------------------------------------------------
    // TODO: Setup the GPU program here
    // ------------------------------------------------
    
  }

  loop(ms) {
    const gl = this.#gl

    const {inputs} = this.controls
    // console.log({handleCamera:true, inputs})

    gl.clearColor(0,0,0,0)
    // Clear Buffers
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)


    // ------------------------------------------------
    // TODO: Run GPU draw calls here
    // ------------------------------------------------

  }
}
