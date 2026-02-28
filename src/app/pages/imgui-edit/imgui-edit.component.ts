import { Component } from '@angular/core'
import { NzInputDirective } from 'ng-zorro-antd/input'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-imgui-edit',
  imports: [NzInputDirective, FormsModule],
  templateUrl: './imgui-edit.component.html',
})
export class ImguiEditComponent {
  public stringInput?: string
  public borderRadius?: number
  public code?: Float32Array<ArrayBufferLike>
  public convertedString?: string

  public convert() {
    if (!this.stringInput || !this.borderRadius) return

    this.code = this.decodeImGuiStyle(this.stringInput)
    this.setStyleValue(3, this.borderRadius) // window radius

    this.convertedString = this.encodeImGuiStyle(this.code!)
    console.log(this.code)
    console.log('CONVERTED', this.convertedString)
  }

  public decodeImGuiStyle(base64: string): Float32Array {
    const binary = atob(base64)

    const len = binary.length
    const buffer = new ArrayBuffer(len)
    const bytes = new Uint8Array(buffer)

    for (let i = 0; i < len; i++) {
      bytes[i] = binary.charCodeAt(i)
    }

    return new Float32Array(buffer)
  }

  public encodeImGuiStyle(values: Float32Array): string {
    const bytes = new Uint8Array(values.buffer)

    let binary = ''
    for (let i = 0; i < bytes.length; i++) {
      binary += String.fromCharCode(bytes[i])
    }

    return btoa(binary)
  }

  public setStyleValue(index: number, value: number): void {
    if (!this.code) {
      throw new Error('Style buffer is not initialized')
    }

    if (index < 0 || index >= this.code.length) {
      throw new RangeError(
        `Index ${index} out of bounds (0–${this.code.length - 1})`
      )
    }

    this.code[index] = value
  }

  public copyToClip(): void {
    if (!this.convertedString) return

    navigator.clipboard.writeText(this.convertedString)
  }
}
