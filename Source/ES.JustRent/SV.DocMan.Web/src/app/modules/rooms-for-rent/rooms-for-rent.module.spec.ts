import { RoomsForRentModule } from './rooms-for-rent.module';

describe('RoomsForRentModule', () => {
  let roomsForRentModule: RoomsForRentModule;

  beforeEach(() => {
    roomsForRentModule = new RoomsForRentModule();
  });

  it('should create an instance', () => {
    expect(roomsForRentModule).toBeTruthy();
  });
});
